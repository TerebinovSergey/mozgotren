import { getElement } from '../../utils/utils';

export function sliderTitleTimeout(): void {
  const mainSlide = getElement('.slider');
  const image1 = getElement('.item1');
  const image2 = getElement('.item2');
  const image3 = getElement('.item3');
  const range = getElement('.range') as HTMLInputElement;

  async function moveSlide1() {
    mainSlide.innerHTML = '';
    mainSlide.append(image3);
    image2.classList.remove('move-right-1', 'move-right-2');
    image1.classList.remove('move-right-1', 'move-right-2');
    image3.classList.remove('move-right-2');
    image3.classList.add('move-right-1');
    await new Promise((e) => { setTimeout(e, 500); });
    mainSlide.innerHTML = '';
    mainSlide.append(image1);
    range.value = '0';
    image3.classList.remove('move-right-2', 'move-right-1');
    image2.classList.remove('move-right-2', 'move-right-1');
    image1.classList.remove('move1');
    image1.classList.add('move-right-2');
    await new Promise((e) => { setTimeout(e, 500); });
  }
  async function moveSlide2() {
    mainSlide.innerHTML = '';
    mainSlide.append(image1);
    image2.classList.remove('move-right-1', 'move-right-2');
    image3.classList.remove('move-right-1', 'move-right-2');
    image1.classList.remove('move-right-2');
    image1.classList.add('move-right-1');
    await new Promise((e) => { setTimeout(e, 500); });
    mainSlide.innerHTML = '';
    mainSlide.append(image2);
    range.value = '1';
    image3.classList.remove('move-right-2', 'move-right-1');
    image1.classList.remove('move-right-2', 'move-right-1');
    image2.classList.remove('move-right-1');
    image2.classList.add('move-right-2');
    await new Promise((e) => { setTimeout(e, 500); });
  }
  async function moveSlide3() {
    mainSlide.innerHTML = '';
    mainSlide.append(image2);
    image3.classList.remove('move-right-1', 'move-right-2');
    image1.classList.remove('move-right-1', 'move-right-2');
    image2.classList.remove('move-right-2');
    image2.classList.add('move-right-1');
    await new Promise((e) => { setTimeout(e, 500); });
    mainSlide.innerHTML = '';
    mainSlide.append(image3);
    range.value = '2';
    image1.classList.remove('move-right-2', 'move-right-1');
    image2.classList.remove('move-right-2', 'move-right-1');
    image3.classList.remove('move-right-1');
    image3.classList.add('move-right-2');
    await new Promise((e) => { setTimeout(e, 500); });
  }

  let isPause1 = false;
  let isPause2 = false;
  let isPause3 = false;

  async function moveSlideInt() {
    if (!isPause1) {
      moveSlide1();
      await new Promise((e) => { setTimeout(e, 5000); });
    }
    if (!isPause2) {
      moveSlide2();
      await new Promise((e) => { setTimeout(e, 5000); });
    }
    if (!isPause3) {
      moveSlide3();
      await new Promise((e) => { setTimeout(e, 5000); });
    }
  }

  moveSlideInt();
  const int = setInterval(() => moveSlideInt(), 18000);
  setTimeout(() => clearInterval(int), 180000);

  range.addEventListener('change', async () => {
    if (range.value === '0') {
      isPause1 = true; isPause2 = true; isPause3 = true;
      moveSlide1();
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause2 = false;
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause3 = false;
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause1 = false;
    }
    if (range.value === '1') {
      isPause1 = true; isPause2 = true; isPause3 = true;
      moveSlide2();
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause3 = false;
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause1 = false;
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause2 = false;
    }
    if (range.value === '2') {
      isPause1 = true; isPause2 = true; isPause3 = true;
      moveSlide3();
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause1 = false;
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause2 = false;
      await new Promise((e) => { setTimeout(e, 5000); });
      isPause3 = false;
    }
  });
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

  function move1() {
    mainSlide.innerHTML = '';
    mainSlide.append(slide1);
    slide2.classList.remove('opacity');
    slide3.classList.remove('opacity');
    slide4.classList.remove('opacity');
    slide5.classList.remove('opacity');
    slide6.classList.remove('opacity');
    slide1.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button1.classList.add('benefits-item-active');
  }
  function move2() {
    mainSlide.innerHTML = '';
    mainSlide.append(slide2);
    slide1.classList.remove('opacity');
    slide3.classList.remove('opacity');
    slide4.classList.remove('opacity');
    slide5.classList.remove('opacity');
    slide6.classList.remove('opacity');
    slide2.classList.add('opacity');
    button1.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button2.classList.add('benefits-item-active');
  }
  function move3() {
    mainSlide.innerHTML = '';
    mainSlide.append(slide3);
    slide2.classList.remove('opacity');
    slide1.classList.remove('opacity');
    slide4.classList.remove('opacity');
    slide5.classList.remove('opacity');
    slide6.classList.remove('opacity');
    slide3.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button3.classList.add('benefits-item-active');
  }
  function move4() {
    mainSlide.innerHTML = '';
    mainSlide.append(slide4);
    slide2.classList.remove('opacity');
    slide3.classList.remove('opacity');
    slide1.classList.remove('opacity');
    slide5.classList.remove('opacity');
    slide6.classList.remove('opacity');
    slide4.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button4.classList.add('benefits-item-active');
  }
  function move5() {
    mainSlide.innerHTML = '';
    mainSlide.append(slide5);
    slide2.classList.remove('opacity');
    slide3.classList.remove('opacity');
    slide4.classList.remove('opacity');
    slide1.classList.remove('opacity');
    slide6.classList.remove('opacity');
    slide5.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button6.classList.remove('benefits-item-active');
    button5.classList.add('benefits-item-active');
  }
  function move6() {
    mainSlide.innerHTML = '';
    mainSlide.append(slide6);
    slide2.classList.remove('opacity');
    slide3.classList.remove('opacity');
    slide4.classList.remove('opacity');
    slide5.classList.remove('opacity');
    slide1.classList.remove('opacity');
    slide6.classList.add('opacity');
    button2.classList.remove('benefits-item-active');
    button3.classList.remove('benefits-item-active');
    button4.classList.remove('benefits-item-active');
    button5.classList.remove('benefits-item-active');
    button1.classList.remove('benefits-item-active');
    button6.classList.add('benefits-item-active');
  }

  async function moveSlideInt() {
    move1();
    await new Promise((e) => { setTimeout(e, 5000); });
    move2();
    await new Promise((e) => { setTimeout(e, 5000); });
    move3();
    await new Promise((e) => { setTimeout(e, 5000); });
    move4();
    await new Promise((e) => { setTimeout(e, 5000); });
    move5();
    await new Promise((e) => { setTimeout(e, 5000); });
    move6();
    await new Promise((e) => { setTimeout(e, 5000); });
  }
  button1.addEventListener('click', move1);
  button2.addEventListener('click', move2);
  button3.addEventListener('click', move3);
  button4.addEventListener('click', move4);
  button5.addEventListener('click', move5);
  button6.addEventListener('click', move6);

  moveSlideInt();
  const int = setInterval(() => moveSlideInt(), 33000);
  setTimeout(() => clearInterval(int), 150000);
}
