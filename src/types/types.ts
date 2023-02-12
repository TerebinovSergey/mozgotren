export enum GameState {
  Play = 1,
  Finished,
  Waiting,
}

export enum GameNames {
  Slozhenie = 'slozhenie',
  Vychitanie = 'vychitanie',
  Delenie = 'delenie',
  Umnozhenie = 'umnozhenie',
  Arifmetika = 'arifmetika',
  TablicaShulte = 'tablica-shulte',
  ShulteAlfavit = 'shulte-alfavit',
  ShulteCvet = 'shulte-cvet',
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
  nameGame: GameNames,
  logoImg?: string,
  taskDescription?: string,
};

export type SessionData = {
  message: string,
  status: boolean,
  user: string,
  email: string,
};

export type AuthData = {
  username?: string,
  email: string,
  password: string,
};

export type UserData = {
  userId: string,
  oldEmail: string,
  age: string,
  regTime: Date,
  birdthDate?: string,
  profession?: string
  accStatus: string,
};
