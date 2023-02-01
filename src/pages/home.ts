import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';

export default class HomePage {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    const footer = new FooterView();
    footer.draw();
  }
}
