import { DataGame, DataGames } from '../types/types';

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

export const submitForm = async (objValues: any) => {
  const path = (Object.keys(objValues).length === 2) ? 'login' : 'registration';
  const result = await fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    body: JSON.stringify(objValues),
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return result;
};

export const isAuthenticated = async () => {
  const cookieArray: any = [];
  document.cookie.split('=').join().replace(/ /g, '').split(';')
    .forEach((element) => {
      cookieArray.push(element.split(','));
    });
  const ssid = cookieArray.filter((item: any) => item[0] === 'ssid');
  const result = await fetch(`${baseUrl}/check-registration`, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(ssid)),
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return result.json();
};

export const isUserCheck = await isAuthenticated();
