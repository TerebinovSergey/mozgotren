import { AuthData, DataGame, DataGames } from '../types/types';

// eslint-disable-next-line global-require
const json = require('../data/games.json') as DataGames;

export function getElement(
  selector: string,
  parent: Element | Document = document,
): HTMLElement {
  const element = parent.querySelector(selector);
  if (!(element instanceof HTMLElement)) {
    throw new Error(`${selector} search error!`);
  }
  return element;
}

export function randomInteger(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function getDataGame(id: number): DataGame {
  const data = json.games.find((el) => el.id === id);
  if (data === undefined) throw new Error('Invalid game id');
  return data;
}

export const baseUrl = 'http://localhost:5000';
// export const baseUrl = 'https://api.leoniuk.dev';

export const submitForm = async (objValues: AuthData) => {
  const path = (Object.keys(objValues).length === 2) ? 'login' : 'registration';
  try {
    const result = await fetch(`${baseUrl}/${path}`, {
      method: 'POST',
      body: JSON.stringify(objValues),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });
    // console.log(result);
    return result;
  } catch (error) {
    console.log({ message: 'server connection error' });
  }
  return new Response();
};

export const isAuthenticated = async () => {
  const cookiesArray: Array<string[]> = [];
  document.cookie.split('=').join().replace(/ /g, '').split(';')
    .forEach((element: string) => {
      cookiesArray.push(element.split(','));
    });
  // console.log('cookiesArray: ', cookiesArray);
  const ssid = cookiesArray.filter((item: string[]) => item[0] === 'ssid');
  try {
    const result = await fetch(`${baseUrl}/check-registration`, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(ssid)),
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await result.json();
  } catch (error) {
    console.log({ message: 'server connection error' });
  }
  return JSON.stringify({ message: 'server connection error' });
};

export const isUserCheck = await isAuthenticated();
