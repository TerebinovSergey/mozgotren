export default class HeaderView {
  draw(): void {
    const header = document.createElement('header');
    header.classList.add('header main-background');
    header.innerHTML = this.getHeaderHTML();
    document.body.prepend(header);
  }

  // eslint-disable-next-line class-methods-use-this
  private getHeaderHTML(): string {
    return `<div class="container">
      <div class="nav-wrapper">
        <a class="logo" href="/"
          ><img class="logo-img" src="./logo.png" alt="Mozgotren" />
          <span class="logo-title">MOZGOTREN</span></a
        >
        <nav class="nav">
          <ul class="nav-ul">
            <li class="nav-li">
              <a class="nav-item" href="/"
                ><img class="home-img" src="./home-icon.svg" alt=""
              /></a>
            </li>
            <li class="nav-li">
              <a class="nav-item" href="/#about-us">Развитие</a>
            </li>
            <li class="nav-li">
              <a class="nav-item" href="/#features">Преимущества</a>
            </li>
            <li class="nav-li">
              <a class="nav-item" href="/trenagors">Тренажеры</a>
            </li>
            <li class="nav-li">
              <a class="nav-item" href="/login">Войти</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>`;
  }
}
