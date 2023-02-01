export default class FooterView {
  draw(): void {
    const footer = document.createElement('footer');
    footer.innerHTML = this.getFooterHTML();
    document.body.append(footer);
  }

  // eslint-disable-next-line class-methods-use-this
  private getFooterHTML(): string {
    return `<div class="container">
      <div class="footer-wrapper main-background">
        <span class="footer__year">© 2023</span>
        <div class="footer__authors">
          <a class="footer__author" href="https://github.com/TerebinovSergey">Terebinov Sergey</a> | 
          <a class="footer__author" href="https://github.com/Mary190183">Mary Petrovskaya</a> | 
          <a class="footer__author" href="https://github.com/alexbrestby">Alexander Leoniuk</a>
        </div>
        <a href="https://rs.school/js/" class="footer__link">
          <img class="footer__rs-logo" src="./rs_school_logo.svg" alt="rs school">
        </a>
      </div>
    </div>`;
  }
}
