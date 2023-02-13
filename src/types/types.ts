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
  SortirovshchikCifr = 'sortirovshchik-cifr',
  SortirovshchikCvetov = 'sortirovshchik-cvetov',
  SortirovshchikSlov = 'sortirovshchik-slov',
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
  logoImg: string,
  taskDescription: string,
  categoryId: number,
};

export type Words = {
  words: string[],
};

export type SessionData = {
  message: string,
  status: boolean,
  user: string,
};

export type AuthData = {
  username?: string,
  email: string,
  password: string,
};
