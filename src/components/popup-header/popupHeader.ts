import { getElement } from '../../utils/utils';

// eslint-disable-next-line import/prefer-default-export
export function popupVisibility(): void {
  const bodyArea = getElement('.body-background-shaddow');
  bodyArea.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active');
    getElement('.body-background-shaddow')?.classList.toggle('hidden');
    getElement('#nav-icon')?.classList.toggle('open');
  });
  const burgerMenu = getElement('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active');
    getElement('.body-background-shaddow')?.classList.toggle('hidden');
    getElement('#nav-icon')?.classList.toggle('open');
  });
}

/* export function popupVisibilityDescription(): void {
  console.log('popupVisibilityDescription');
  const bodyAreaDesc = getElement('.body-background-shaddow-description');
  bodyAreaDesc.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active');
    getElement('.body-background-shaddow')?.classList.toggle('hidden-desc');
    getElement('#nav-icon')?.classList.toggle('open');
  });
  const burgerMenu = getElement('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active');
    getElement('.body-background-shaddow')?.classList.toggle('hidden-desc');
    getElement('#nav-icon')?.classList.toggle('open');
  });
} */
