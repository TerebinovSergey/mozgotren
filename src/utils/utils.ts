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

export const test: number = 0;

// export const baseUrl = 'http://localhost:5000';
export const baseUrl = 'https://api.leoniuk.dev';

export const submitForm = async (objValues: any) => {
  const result = await fetch(`${baseUrl}/users/registration`, {
    method: 'POST',
    body: JSON.stringify(objValues),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return result;
};
