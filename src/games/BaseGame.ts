import { GameState, DataGame, GameNames } from '../types/types';
import { getDataGame, getUserIdFromCookie, sendResult } from '../utils/utils';

// eslint-disable-next-line import/prefer-default-export
export class BaseGame {
  readonly id: number;
  complexity: number;
  readonly basicComplexity: number;
  readonly levels: number;
  currentLevel: number;
  score: number;
  readonly time: number;
  timeLeft: number;
  rightAnswers: number;
  wrongAnswers: number;
  gameState: GameState;
  timeoutTimer!: NodeJS.Timeout;
  readonly nameGame: GameNames;
  readonly nameGameRu: string;
  readonly logo: string;
  readonly check1: string;
  readonly check2: string;
  readonly check3: string;
  readonly taskDescription: string;

  constructor(id: number) {
    this.id = id;
    this.currentLevel = 1;
    this.score = 0;
    this.rightAnswers = 0;
    this.wrongAnswers = 0;
    this.gameState = GameState.Waiting;
    const data: DataGame = getDataGame(this.id);
    this.time = data.time;
    this.timeLeft = this.time;
    this.basicComplexity = data.basicComplexity;
    this.complexity = data.basicComplexity;
    this.levels = data.levels;
    this.check1 = data.check1;
    this.check2 = data.check2;
    this.check3 = data.check3;
    this.nameGameRu = data.nameGameRu;
    this.nameGame = data.nameGame;
    this.logo = data.logoImg ?? '';
    this.taskDescription = data.taskDescription ?? '';
  }

  start(): void {
    this.resetGameStats();
    this.gameState = GameState.Play;
    this.startTimer();
  }

  async stop(): Promise<void> {
    if (this.gameState === GameState.Finished) return;
    const userId = getUserIdFromCookie()[0][1];
    clearInterval(this.timeoutTimer);
    this.gameState = GameState.Finished;
    if (this.rightAnswers === 0 && this.wrongAnswers === 0) return;
    const result = await sendResult({
      userId,
      gameId: this.id,
      score: this.score,
      time: this.time - this.timeLeft,
      date: new Date(),
      rightAnswers: this.rightAnswers,
      wrongAnswers: this.wrongAnswers,
    });
    console.log(await result);
  }

  resetGameStats(): void {
    this.score = 0;
    this.rightAnswers = 0;
    this.wrongAnswers = 0;
    this.currentLevel = 1;
    clearInterval(this.timeoutTimer);
  }

  updateScore(increase: boolean): void {
    if (increase) {
      this.score += this.complexity * this.currentLevel;
    } else {
      const decreaseScore = (this.complexity * this.currentLevel) / 2;
      this.score = Math.max(this.score - decreaseScore, 0);
    }
    this.updateAnswerCount(increase);
  }

  updateLevel(increase: boolean): void {
    this.currentLevel = (increase)
      ? Math.min(this.currentLevel + 1, this.levels)
      : Math.max(this.currentLevel - 1, 1);
  }

  updateAnswerCount(rigthAnswer: boolean): void {
    if (rigthAnswer) {
      this.rightAnswers += 1;
    } else {
      this.wrongAnswers += 1;
    }
  }

  startTimer(): void {
    this.timeLeft = this.time;
    this.timeoutTimer = setInterval(() => {
      this.timeLeft -= 1;
      this.gameState = (this.timeLeft > 0) ? GameState.Play : GameState.Finished;
      if (this.gameState !== GameState.Play) clearInterval(this.timeoutTimer);
    }, 1000);
  }
}
