import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';

export default class GamePage {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    GamePage.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('game-main');
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
            <span class=""><span><span  class="">Очки:</span><b><span> 0 </span></b></span></span>
          </button>
          <button type="button" class="button-navigation">
            <span class=""><span><span class="hide-xs">Уровень: </span><b>1</b> / 8 </span>
          </button>
          <button type="button" class="button-navigation">
            <span class=""><span><span class="hide-xs">Время: </span><b>60</b></span>
          </button>
        </div>
        
        <div class="information">
          <hr class="shadow">
          <div class="information-container">
            <div class="game-logo"></div>
            <div class="title-container">
              <h2 class="game-title">Мемори</h2>
              <h5 class="game-difficult"> Коэффициент сложности: <b>64</b></h5>
            </div>
            <ul class="check-container">
              <li class="check-item"><div class="check" alt="check"></div><h5>Кратковременная память</h5></li>
              <li class="check-item"><div class="check" alt="check"></div><h5>Наблюдательность</h5></li>
              <li class="check-item"><div class="check" alt="check"></div><h5>Образное мышление</h5></li>
            </ul>
          </div>
        </div>
        
        <div class="form-container">
          <hr class="separator">
          <form action="/game-start">
            <button type="submit" class="button"">
              <span class="">Начать тренировку</span>
            </button>
          </form>
          <a href="/game-rules"><h5>Правила игры</h5></a>
          <h5> Пригласите друзей на тренировку: </h5>
        </div>
      </div>
    </div>`;
  }
}
