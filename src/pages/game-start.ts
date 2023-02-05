import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';

export default class GamePageStart {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    GamePageStart.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('game-main-start');
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
    <div class="game-start-container">
    
    </div>`;
  }
}
