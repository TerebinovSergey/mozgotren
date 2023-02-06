import { GameState } from '../types/types';

export type BaseGameParameters = {
  id: number,
  maxLevel: number,
  basicComplexity: number,
};

export class BaseGame {
  id: number;
  complexity: number;
  basicComplexity: number;
  maxLevel: number;
  currentLevel: number;
  score: number;
  time: number;
  timeLeft: number;
  rightAnswers: number;
  wrongAnswers: number;
  gameState: GameState;
  timeoutTimer!: NodeJS.Timeout;

  constructor(parameters: BaseGameParameters) {
    this.id = parameters.id;
    this.basicComplexity = parameters.basicComplexity;
    this.complexity = parameters.basicComplexity;
    this.maxLevel = parameters.maxLevel;
    this.currentLevel = 1;
    this.score = 0;
    this.time = 60;
    this.timeLeft = 0;
    this.rightAnswers = 0;
    this.wrongAnswers = 0;
    this.gameState = GameState.Waiting;
  }

  start(): void {
    this.resetGameStats();
    this.gameState = GameState.Play;
    this.startTimer();
  }

  stop(): void {
    clearInterval(this.timeoutTimer);
    this.gameState = GameState.Finished;
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
      const coefficient = (this.currentLevel > 1) ? 2 : 1;
      const decreaseScore = (this.complexity * this.currentLevel) / coefficient;
      this.score = Math.max(this.score - decreaseScore, 0);
    }
    this.updateAnswerCount(increase);
  }

  updateLevel(increase: boolean): void {
    this.currentLevel = (increase)
      ? Math.min(this.currentLevel + 1, this.maxLevel)
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
