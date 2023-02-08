import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement, isUserCheck } from '../utils/utils';

export default class GamePageResult {
  static draw(): void {
    const header = new HeaderView();
    header.draw(isUserCheck);
    GamePageResult.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('game-main-result');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `
    <div class="body-background-shaddow" 
    onclick="document.querySelector('.nav-aside')?.classList.toggle('active'); 
             document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
             document.querySelector('.open')?.classList.toggle('hidden1');
             document.querySelector('.close')?.classList.toggle('hidden1');
           "></div>
    <div class="game-container">
      <div class="game-container-wrapper">
        <div class="navigation">
          <button type="button" class="button-navigation">
            <div class="check-mark"></div>
            <span  class="grey text">Очки: </span>
            <span><b class="white"> 0 </b></span>
          </button>
          <div class="navigation-block">
            <button type="button" class="button-navigation">
              <div class="flag"></div>
                <span class="grey text">Уровень: </span>
                <span><b class="white">1 / </b></span>
                <span><b class="grey"> 8</b> </span>
            </button>
            <button type="button" class="button-navigation">
              <div class="stopwatch"></div>
              <span class="grey text" >Время: </span><span><b class="white">60</b></span>
            </button>
          </div>
        </div>
        <div class="information">
        <hr class="shadow">
        <div class="information-container">
          <div class="info-title-container">
            <div class="game-logo"></div>
            <div class="title-container">
              <h2 class="game-title">Мемори</h2>
              <h5 class="game-difficult"> Коэффициент сложности: <b>64</b></h5>
            </div>
          </div>
          <ul class="check-container">
            <li class="check-item"><div class="check check1"></div><h5>Кратковременная память</h5></li>
            <li class="check-item"><div class="check check2"></div><h5>Наблюдательность</h5></li>
            <li class="check-item"><div class="check check3"></div><h5>Образное мышление</h5></li>
          </ul>
        </div>
      </div>
      <div class="result-container">
        <cicle class="percentages-circle">
          <div class="percentages"><h5>100%</h5></div>
        </cicle>
        <div class="result-container-block">
          <h5 class="results-title">РЕЗУЛЬТАТ:</h5><span class="number big">90</span>
          <div class="result-row"><h6 class="results-success">Правильных:</h6><span class="number green">9</span></div>
          <div class="result-row"><h6 class="results-errors">Неправильных:</h6><span class="number red">0</span></div>
        </div>
      </div>
      <div class="form-container">
        <hr class="separator">
        <form action="/game-start">
          <button type="submit" class="button">
            <span class="">Начать тренировку</span>
          </button>
        </form>
        <div class="game-difficult-container">
          <h5 class="game-difficult-id"> Cложность тренажера: </h5>
          <div class="container-game-difficult-id"></div>
        </div>
        <a class="game-rules" href="#">
          <h5>Правила игры</h5>
          <div class="question"></div>
        </a>
        <h5> Пригласите друзей на тренировку: </h5>
        <ul class="link-container">
          <li class="link-item"><a href="/https://www.facebook.com/"><div class="facebook"></div></a></li>
          <li class="link-item"><a href="/https://ok.ru/"><div class="odnoklassniki"></div></a></li>
          <li class="link-item"><a href="/https://https://login.microsoftonline.com/"><div class="open-letter"></div></a></li>
        </ul>
      </div>
      </div>
    </div>`;
  }
}
