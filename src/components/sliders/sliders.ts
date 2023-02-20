import { getElement } from '../../utils/utils';

export default function sliderTitle(): void {
  const mainSlide = getElement('.slider');
  const range = getElement('.range') as HTMLInputElement;
  const newValue = range.value;
  const width = mainSlide.clientWidth;
  const height = mainSlide.clientHeight;

  mainSlide.style.transform = `translateX(${-newValue * 0.33 * width}px)`;
  if (window.screen.width <= 1300) {
    mainSlide.style.transform = `translateX(${-0.3 * Number(newValue) * width}px)`;
  }
  if (window.screen.width <= 950) {
    mainSlide.style.transform = `translateY(${-0.3 * Number(newValue) * height}px)`;
  }
  range.addEventListener('change', sliderTitle);
}
