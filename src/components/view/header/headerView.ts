export default class HeaderView {
  draw(): void {
    const header = document.createElement('header');
    header.classList.add('header', 'main-background');
    header.innerHTML = this.getHeaderHTML();
    document.body.prepend(header);
  }

  private getHeaderHTML(): string {
    return `<div class="header_container">
      <div class="nav-wrapper">
      <nav class="nav-aside">
      <div class="nav__mozgotren-big"></div>
      <p class="nav__title-aside">MOZGOTREN</p>
      <ul class="nav-ul-aside">
        <li class="nav-li-aside">
          <a class="nav-item-aside" href="/"
            ><img class="home-img" src="./assets/home-icon.svg" alt=""
          /></a>
        </li>
        <li class="nav-li-aside">
          <a class="nav-item-aside" href="/#about-us">Развитие</a>
        </li>
        <li class="nav-li-aside">
          <a class="nav-item-aside" href="/#features">Преимущества</a>
        </li>
        <li class="nav-li-aside">
          <a class="nav-item-aside" href="/trenagors">Тренажеры</a>
        </li>
        <li class="nav-li-aside">
          <a class="nav-item-aside" href="/login">Войти</a>
        </li>            
      </ul>
    </nav>
        <a class="logo" href="/"
          ><img class="logo-img" src="./assets/logo.png" alt="Mozgotren" />
          <span class="logo-title">
          <span class="header__underline"></span>
          MOZGOTREN
          <span class="header__underline"></span>
          </span>
        </a>

        <div class="burger-menu" onclick="
          document.querySelector('.nav-aside')?.classList.toggle('active');
          document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');">
           <svg class="open" alt="open"></svg>
        </div>
        <nav class="nav">
          <ul class="nav-ul">
            <li class="nav-li">
              <a class="nav-item" href="/"
                ><img class="home-img" src="./assets/home-icon.svg" alt=""
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
    </div>
`;
  }
}
