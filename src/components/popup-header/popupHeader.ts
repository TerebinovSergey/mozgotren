import { getElement } from '../../utils/utils';

export function popupVisibility(): void {
  const bodyArea = getElement('.body-background-shaddow');
  bodyArea.addEventListener('click', () => {
    document.querySelector('.nav-aside')?.classList.toggle('active');
    document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
    document.querySelector('#nav-icon')?.classList.toggle('open');
  });
  const burgerMenu = getElement('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    document.querySelector('.nav-aside')?.classList.toggle('active');
    document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
    document.querySelector('#nav-icon')?.classList.toggle('open');
  });
}

export function popupVisibilityDescription(): void {
  const bodyAreaDesc = getElement('.body-background-shaddow-description');
  bodyAreaDesc.addEventListener('click', () => {
    document.querySelector('.nav-aside')?.classList.toggle('active');
    document.querySelector('.body-background-shaddow')?.classList.toggle('hidden-desc');
    document.querySelector('#nav-icon')?.classList.toggle('open');
  });
  const burgerMenu = getElement('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    document.querySelector('.nav-aside')?.classList.toggle('active');
    document.querySelector('.body-background-shaddow')?.classList.toggle('hidden-desc');
    document.querySelector('#nav-icon')?.classList.toggle('open');
  });
}
