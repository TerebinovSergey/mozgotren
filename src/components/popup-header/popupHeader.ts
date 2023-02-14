import { getElement } from '../../utils/utils';

// eslint-disable-next-line import/prefer-default-export
export function popupVisibility(): void {
  const bodyArea = getElement('.body-background-shaddow');
  bodyArea.addEventListener('click', () => {
    document.querySelector('.nav-aside')?.classList.toggle('active');
    document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
    document.querySelector('.open')?.classList.toggle('hidden1');
    document.querySelector('.close')?.classList.toggle('hidden1');
  });
}
