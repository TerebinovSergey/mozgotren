export enum GameState {
  Play = 1,
  Finished,
  Waiting,
}

export type DataGames = {
  games: DataGame[],
};

export type DataGame = {
  id: number,
  nameGameRu: string,
  check1: string,
  check2: string,
  check3: string,
  basicComplexity: number,
  koefficient?: number,
  category: string,
  levels: number,
  time: number,
  image: string,
  logoImg?: string,
  nameGame?: string,
};
