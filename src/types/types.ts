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
  StranaStolica = 'strana-stolica',
  StranaValyta = 'strana-valyta',
  AngliyskiySlovar = 'angliyskiy-slovar',
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
  descriptionp1: string,
  descriptionp2?: string,
  descriptionp3?: string,
  questionp1: string,
  questionp2?: string,
  questionp3?: string,
  questionp4?: string,
  questionp5?: string,
  questionp6?: string,
  rulesp1: string,
  rulesp2?: string,
  rulesp3?: string,
  rulesp4?: string,
  rulesp5?: string,
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

type Country = {
  country: string,
  capital: string,
};

export type Countries = {
  countries: Country[],
};

type Currency = {
  country: string,
  currency: string,
};

export type Currencies = {
  currencies: Currency[],
};

type EnglishWord = {
  en: string,
  ru: string,
};

export type EnglishWords = {
  words: EnglishWord[],
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
  oldEmail?: string,
  age?: string,
  regTime?: Date,
  birdthDate?: string,
  profession?: string,
  country?: string,
  accStatus?: string,
  imagePath?: string,
};

export type DataRating = {
  userId: string,
  gameId: number,
  score: number,
  time: number,
  date: Date,
  rightAnswers: number,
  wrongAnswers: number,
};
