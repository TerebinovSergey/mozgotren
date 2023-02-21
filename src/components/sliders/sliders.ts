/* eslint-disable no-promise-executor-return */
import { getElement } from '../../utils/utils';

export function sliderTitle(): void {
  const mainSlide = getElement('.slider');
  const range = getElement('.range') as HTMLInputElement;
  const newValue = Number(range.value);
  const width = mainSlide.clientWidth;

  mainSlide.style.transform = `translateX(${-newValue * 0.33 * width}px)`;

  range.addEventListener('change', sliderTitle);
}

export function sliderTitleTimeout(): void {
  const mainSlide = getElement('.slider');
  const range = getElement('.range') as HTMLInputElement;
  let newValue = Number(range.value);
  const width = mainSlide.clientWidth;

  function moveSlide() {
    mainSlide.style.transform = `translateX(${-newValue * 0.33 * width}px)`;
    mainSlide.classList.add('transform');
  }

  async function moveSlideInt() {
    newValue = 0;
    range.value = '0';
    moveSlide();
    await new Promise((e) => setTimeout(e, 3000));
    newValue = 1;
    range.value = '1';
    moveSlide();
    await new Promise((e) => setTimeout(e, 3000));
    newValue = 2;
    range.value = '2';
    moveSlide();
  }
  moveSlideInt();
  setInterval(() => moveSlideInt(), 9000);
}

export function sliderVertical(): void {
  const mainSlide = getElement('.slider-vertical');
  const slide1 = getElement('.slide1');
  const slide2 = getElement('.slide2');
  const slide3 = getElement('.slide3');
  const slide4 = getElement('.slide4');
  const slide5 = getElement('.slide5');
  const slide6 = getElement('.slide6');
  const button1 = getElement('.move1') as HTMLButtonElement;
  const button2 = getElement('.move2') as HTMLButtonElement;
  const button3 = getElement('.move3') as HTMLButtonElement;
  const button4 = getElement('.move4') as HTMLButtonElement;
  const button5 = getElement('.move5') as HTMLButtonElement;
  const button6 = getElement('.move6') as HTMLButtonElement;
  const height = mainSlide.clientHeight;
  function move1() {
    mainSlide.style.transform = `translateY(${-0 * height}px)`;
    slide5.classList.remove('opacity');
    slide6.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button1.classList.add('benefits-item-active');
  }
  function move2() {
    mainSlide.style.transform = `translateY(${-0.165 * height}px)`;
    slide6.classList.remove('opacity');
    slide1.classList.add('opacity');
    button1.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button2.classList.add('benefits-item-active');
  }
  function move3() {
    mainSlide.style.transform = `translateY(${-0.335 * height}px)`;
    slide1.classList.remove('opacity');
    slide2.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button3.classList.add('benefits-item-active');
  }
  function move4() {
    mainSlide.style.transform = `translateY(${-0.5 * height}px)`;
    slide2.classList.remove('opacity');
    slide3.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button4.classList.add('benefits-item-active');
  }
  function move5() {
    mainSlide.style.transform = `translateY(${-0.665 * height}px)`;
    slide3.classList.remove('opacity');
    slide4.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button5.classList.add('benefits-item-active');
  }
  function move6() {
    mainSlide.style.transform = `translateY(${-0.835 * height}px)`;
    slide4.classList.remove('opacity');
    slide5.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button6.classList.add('benefits-item-active');
  }

  button1.addEventListener('click', move1);
  button2.addEventListener('click', move2);
  button3.addEventListener('click', move3);
  button4.addEventListener('click', move4);
  button5.addEventListener('click', move5);
  button6.addEventListener('click', move6);
}

export function sliderVerticalTimeout(): void {
  const mainSlide = getElement('.slider-vertical');
  const slide1 = getElement('.slide1');
  const slide2 = getElement('.slide2');
  const slide3 = getElement('.slide3');
  const slide4 = getElement('.slide4');
  const slide5 = getElement('.slide5');
  const slide6 = getElement('.slide6');
  const button1 = getElement('.move1') as HTMLButtonElement;
  const button2 = getElement('.move2') as HTMLButtonElement;
  const button3 = getElement('.move3') as HTMLButtonElement;
  const button4 = getElement('.move4') as HTMLButtonElement;
  const button5 = getElement('.move5') as HTMLButtonElement;
  const button6 = getElement('.move6') as HTMLButtonElement;
  const height = mainSlide.clientHeight;
  function move1() {
    mainSlide.style.transform = `translateY(${-0 * height}px)`;
    slide5.classList.remove('opacity');
    slide6.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button1.classList.add('benefits-item-active');
  }
  function move2() {
    mainSlide.style.transform = `translateY(${-0.165 * height}px)`;
    slide6.classList.remove('opacity');
    slide1.classList.add('opacity');
    button1.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button2.classList.add('benefits-item-active');
  }
  function move3() {
    mainSlide.style.transform = `translateY(${-0.335 * height}px)`;
    slide1.classList.remove('opacity');
    slide2.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button3.classList.add('benefits-item-active');
  }
  function move4() {
    mainSlide.style.transform = `translateY(${-0.5 * height}px)`;
    slide2.classList.remove('opacity');
    slide3.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button4.classList.add('benefits-item-active');
  }
  function move5() {
    mainSlide.style.transform = `translateY(${-0.665 * height}px)`;
    slide3.classList.remove('opacity');
    slide4.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button5.classList.add('benefits-item-active');
  }
  function move6() {
    mainSlide.style.transform = `translateY(${-0.835 * height}px)`;
    slide4.classList.remove('opacity');
    slide5.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button6.classList.add('benefits-item-active');
  }

  async function moveSlideInt() {
    move1();
    await new Promise((e) => setTimeout(e, 4000));
    move2();
    await new Promise((e) => setTimeout(e, 4000));
    move3();
    await new Promise((e) => setTimeout(e, 4000));
    move4();
    await new Promise((e) => setTimeout(e, 4000));
    move5();
    await new Promise((e) => setTimeout(e, 4000));
    move6();
  }
  moveSlideInt();
  setInterval(() => moveSlideInt(), 21000);
}
