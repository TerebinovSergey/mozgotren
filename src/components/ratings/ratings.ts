import { baseUrl } from '../../utils/utils';
import { DataRating, RatingsT } from '../../types/types';

interface UserbyGameRatingI {
  userId: string,
  score: number,
  time: number,
  userName: string,
}

interface UserRatingI extends UserbyGameRatingI {
  gameId: number,
}

export default class Ratings {
  gameResults: DataRating[] = [];
  userResult: UserRatingI[] = [];
  bestGameResults: Map<number, UserbyGameRatingI[]> | undefined;
  totalUserResults: UserbyGameRatingI[] = [];

  async read(): Promise<void> {
    try {
      const result = await fetch(`${baseUrl}/ratings`, {
        method: 'GET',
      });
      const allRatings = await result.json() as RatingsT;
      this.gameResults = allRatings.result;
      await this.saveUserResults();
      this.saveBestGameResults();
      this.saveTotalUserResults();
    } catch (error) {
      console.log({ message: 'get all games rating error' });
    }
  }

  async saveUserResults() {
    this.gameResults.forEach((value) => {
      if (value.score > 0
        && value.user !== undefined
        && (value.user.length ?? 0) > 0) {
        const user: UserRatingI = {
          userId: '',
          gameId: 0,
          score: 0,
          time: 0,
          userName: '',
        };
        user.userId = value.userId;
        user.gameId = value.gameId;
        user.score = value.score;
        user.time = value.time;
        user.userName = value.user[0].username ?? '';
        this.userResult.push(user);
      }
    });
  }

  async saveBestGameResults() {
    const groupGame = new Map<number, UserbyGameRatingI[]>();
    this.userResult.forEach((value) => {
      const gameRat = groupGame.get(value.gameId);
      if (gameRat === undefined) {
        groupGame.set(value.gameId, [{ ...value }]);
      } else {
        const userRat = gameRat.find((user) => (user.userId === value.userId));
        if (userRat === undefined) {
          gameRat.push({ ...value });
        } else {
          userRat.score = Math.max(value.score, userRat.score);
        }
      }
    });
    groupGame.forEach((userRat) => {
      userRat.sort((a, b) => b.score - a.score);
    });
    this.bestGameResults = groupGame;
  }

  async saveTotalUserResults() {
    const userTotalRat: UserbyGameRatingI[] = [];
    this.userResult.forEach((value) => {
      const userRatings = userTotalRat.find((el) => value.userId === el.userId);
      if (userRatings === undefined) {
        userTotalRat.push({ ...value });
      } else {
        userRatings.score += value.score;
        userRatings.time += value.time;
      }
    });
    userTotalRat.sort((a, b) => b.score - a.score);
    this.totalUserResults = userTotalRat;
  }

  getUserPositionByGame(gameId: number, userId: string): number {
    if (this.bestGameResults === undefined) return 0;
    const gameRat = this.bestGameResults.get(gameId);
    if (gameRat === undefined) return 0;
    const result = gameRat.findIndex((val) => val.userId === userId);
    return (result < 0) ? 0 : result + 1;
  }
}
