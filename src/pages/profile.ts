import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';

export default class ProfilePage {
  static draw(status: any): void {
    const header = new HeaderView();
    header.draw(status);
    ProfilePage.drawMain(status);
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain(status: any) {
    const main = document.createElement('main');
    main.classList.add('profile-main');
    main.innerHTML = this.getMainHTML(status);
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML(status: any) {
    return `
    <div class="container-profile">
      <div class="profile-title-wrapper">
      <div class="profile-container">
        <div class="profile-info-container ">
          <div class="profile-image"></div>
          <div class="profile-info">
            <h2 class="profile-title">${status.user}</h2>
            <h6 class="profile-text">${status.user}</h6>
          </div> 
          <hr class="vertical-line" > 
          <div class="profile-info">
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="null svg"></div>Возраст:</h6><span class="age">${1}</span></div>
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="bag svg"></div>Сфера деятельности:</h6><span class="job">${2}</span></div>
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="earth svg"></div>Страна:</h6><span class="country">44442222</span></div>
          </div>
          <button class="button-profile svg-container"><div class="pen svg"></div>Редактировать</button>
        </div>  
        <div class="toolbar"> 
          <button class="button-profile-toolbar" onclick="document.querySelector('.page1')?.classList.toggle('hidden3');document.querySelector('.page2')?.classList.toggle('hidden4');">ПРОФИЛЬ</button>
          <button class="button-profile-toolbar" onclick="document.querySelector('.page2')?.classList.toggle('hidden4');document.querySelector('.page1')?.classList.toggle('hidden3');">НАСТРОЙКИ</button>
          <button class="button-profile-toolbar svg-container"><div class="exit svg"></div></button>
        </div>
      </div>
      <div class="profile-info-form-container page1">
        <h4 class="dark-grey">Персональная информация</h4>
        <div class="card-info row">
              <div class="null svg"></div>
              <div class="dark-grey">
                <h4>Мария</h4>
                <h6>Имя</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="letter svg"></div>
              <div class="dark-grey">
                <h4>pma190183@yandex.ru</h4>
                <h6>Email</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="birth svg"></div>
              <div class="dark-grey">
                <h4>19.01.1983</h4>
                <h6>День рождения</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="bag svg"></div>
              <div class="dark-grey">
                <h4>Техника</h4>
                <h6>Сфера деятельности</h6>
              </div>
        </div>
        <h4 class="dark-grey">Данные аккаунта:</h4>
        <div class="card-info row">
              <div class="date svg"></div>
              <div class="dark-grey">
                <h4>01.02.2023</h4>
                <h6>Дата регистрации</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="star svg"></div>
              <div class="dark-grey">
                <h4>Базовый</h4>
                <h6>Статус аккаунта</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="lift svg"></div>
              <div class="dark-grey">
                <h4>10</h4>
                <h6>Кол-во тренировок</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="like svg"></div>
              <div class="dark-grey">
                <h4>Мемори</h4>
                <h6>Любимый тренажер</h6>
              </div>
        </div>
      </div>  
    <div class="profile-info-form-container page2 hidden4" >
      <h4 class="birth-title">Персональная информация</h4>
      <div class="input-box">
         <label><h5>Имя</h5></label>
         <input type="text">
      </div>
      <div class="input-box">
          <label><h5>Email</h5></label>
          <input type="email">
      </div>
      <div class="input-box">
          <label><h5>Сфера деятельности:</h5></label>
            <select id="job">
              <option></option>
              <option>ИТ</option>
              <option>Бухгалтерия</option>
              <option>Техника</option>
              <option>Образование</option>
            </select>
      </div>
      <div class="input-box">
            <label><h5>Страна:</h5></label>
              <select id="country" autofocus="true">
                <option></option>
                <option>Армения</option>
                <option>Россия</option>
                <option>США</option>
                <option>Япония</option>
              </select>
      </div>
      <h4 class="birth-title">День рождения:</h4>
      <div class="birth-container">
              <div class="input-box">
                <label><h5>День</h5></label>
                <select>
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div class="input-box">
                <label><h5>Месяц:</h5></label>
                <select>
                  <option></option>
                  <option>Январь</option>
                  <option>Февраль</option>
                  <option>Март</option>
                  <option>Апрель</option>
                  <option>Май</option>
                  <option>Июнь</option>
                  <option>Июль</option>
                  <option>Август</option>
                  <option>Сентябрь</option>
                  <option>Октябрь</option>
                  <option>Ноябрь</option>
                  <option>Декабрь</option>
                </select>
              </div>
              <div class="input-box">
                <label><h5>Год:</h5></label>
                <select>
                  <option></option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                </select>
              </div>
      </div>
      <h4 class="birth-title v">Изображение профиля:</h4>
      <div class="profile-form">
              <form method="post" enctype="multipart/form-data">
                <label class="input-file svg-container">
                  <div class="paperclip svg"></div>
                  <div class="input-box">
                    <span class="input-file-text" type="text"></span>
                    <label><h5>Загрузить фото</h5></label>
                    <input class="input-file" type="file" name="file">
                    <span class="input-file-text-1">Максимум 5мб</span>
                    <div class="photo svg"></div>
                  </div>
                </label>
              </form>
              <div class="profile-image"></div>
      </div>
      <button class="button-profile end">Сохранить</button>
      <h4 class="birth-title v ">Настройки</h4>
      <div class="sound-container">
              <label class="checkbox-ios">
                <input type="checkbox" checked disabled>
                <span class="checkbox-ios-switch"></span>
              </label>
              <h5 class="birth-title v">звук в тренажерах</h5>
      </div>
      <h4 class="birth-title">Изменить пароль:</h4>
      <div class="input-box hover" data-title="Длина пароля должна быть не меньше 8 символов, содержать цифры и буквы нижнего и верхнего регистра">
              <label><h5>Новый пароль</h5></label>
              <input type="password">
      </div>
      <div class="input-box">
              <label><h5>Повторите пароль</h5></label>
              <input type="password">
      </div>
      <button class="button-profile end" disabled = "true">Сохранить пароль</button>
    </div>`;
  }
}
