import { getElement } from '../../utils/utils';

export default function popupVisibility(): void {
  const bodyArea = getElement('.body-background-shaddow');
  bodyArea.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active-burger');
    getElement('.body-background-shaddow')?.classList.toggle('hidden');
    getElement('#nav-icon')?.classList.toggle('open');
  });
  const burgerMenu = getElement('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active-burger');
    getElement('.body-background-shaddow')?.classList.toggle('hidden');
    getElement('#nav-icon')?.classList.toggle('open');
  });
}
