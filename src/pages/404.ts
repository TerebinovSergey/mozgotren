export default class Page404 {
  static draw(): void {
    document.body.innerHTML = `
      <div class="gradient-color-404"></div>
      <div class="container-404">
      <div class="main-404">
        <img class="main-404-img" src="./assets/error_404.png" alt="">
        <h5 class="not-found">Страница не найдена</h5>
        <p>Приносим свои извинения, страница которую вы ищете, не найдена,
          возможно она была удалена или перемещена.</p>
        <a href="/" class="train-brain btn-back-home"> Вернуться на главную страницу </a>
      </div>
      </div>
    </div>`;
  }
}
