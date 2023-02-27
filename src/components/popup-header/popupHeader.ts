import { getElement } from '../../utils/utils';

export default function popupVisibility(): void {
  const bodyArea = getElement('.body-background-shaddow');
  bodyArea.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active-burger');
    getElement('.body-background-shaddow')?.classList.toggle('hidden');
    getElement('#nav-icon')?.classList.toggle('open');
    document.body.style.height = 'unset';
  });
  const burgerMenu = getElement('.burger-menu');
  burgerMenu.addEventListener('click', () => {
    getElement('.nav-aside')?.classList.toggle('active-burger');
    getElement('.body-background-shaddow')?.classList.toggle('hidden');
    getElement('#nav-icon')?.classList.toggle('open');
    if (document.body.style.height === '100vh') {
      document.body.style.height = 'unset';
    } else {
      document.body.style.height = '100vh';
    }
  });
}
