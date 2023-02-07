export default class HeaderView {
  draw(user: any): void {
    const header = document.createElement('header');
    header.classList.add('header', 'main-background');
    header.innerHTML = this.getHeaderHTML(user);
    document.body.prepend(header);
  }

  // eslint-disable-next-line class-methods-use-this
  private getHeaderHTML(
    user: {
      message: string,
      status: boolean,
      user: { username: string }
    },
  ): string {
    console.log(user);
    const isUser = !user.status ? 'Войти' : 'Кабинет';
    const isUserLink = !user.status ? '/login' : '/profile';
    return `
    <div class="container">
    <div class="nav-wrapper">
      <nav class="nav-aside">
      <a href="/" class="nav__aside-logo">
        <div class="nav__mozgotren-big"></div>
        <span class="nav__title-aside">
          <span class="header__underline2"></span>
            MOZGOTREN
          <span class="header__underline2"></span>
        </span>
      </a>
      <ul class="nav-ul-aside">
        <li class="nav-li-aside">
          <a class="nav-item-aside" href="/">
           <img class="home-img" src="./assets/home-icon.svg" alt=""/>
          </a>
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
        <li class="nav-li-aside"><span>${user.status ? user.user.username : ''}</span>
          <a class="nav-item" href="${isUserLink}">${isUser}</a>
        </li>         
      </ul>
      </nav>
      <a class="logo" href="/">
        <img class="logo-img" src="./assets/logo.png" alt="Mozgotren" />
        <span class="logo-title">
          <span class="header__underline"></span>
          MOZGOTREN
          <span class="header__underline"></span>
        </span>
      </a>
      <div class="burger-menu" onclick="document.querySelector('.nav-aside')?.classList.toggle('active'); 
      document.querySelector('.body-background-shaddow')?.classList.toggle('hidden');
      document.querySelector('.open')?.classList.toggle('hidden1');
      document.querySelector('.close')?.classList.toggle('hidden1');
      ">
         <svg class="open" alt="open"></svg>
         <svg class="close hidden1" alt="close"></svg>
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
            <li class="nav-li"><span>${user.status ? user.user.username : ''}</span>
              <a class="nav-item" href="${isUserLink}">${isUser}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>`;
  }
}
