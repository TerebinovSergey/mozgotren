import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement } from '../utils/utils';
import { UserData, SessionData } from '../types/types';

export default class ProfilePage {
  static draw(ssid: SessionData, userData: UserData, userCountry: string): void {
    const header = new HeaderView();
    header.draw(ssid);
    ProfilePage.drawMain(ssid, userData, userCountry);
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain(ssid: SessionData, userData: UserData, userCountry: string) {
    const main = document.createElement('main');
    main.classList.add('profile-main');
    main.innerHTML = this.getMainHTML(ssid, userData, userCountry);
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML(user: SessionData, userData: UserData, userCountry: string) {
    return `
    <div class="container-profile">
      <div class="profile-title-wrapper">
      <div class="profile-container">
        <div class="profile-info-container ">
          <div class="profile-image"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
          <div class="profile-info">
            <h2 class="profile-title">${user.user}</h2>
            <h3 class="profile-text">${user.email}</h3>
          </div> 
          <hr class="vertical-line" > 
          <div class="profile-info">
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="null svg"></div>Возраст:</h6><span class="age">${userData.age ?? 'не укзано'}</span></div>
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="bag svg"></div>Сфера деятельности:</h6><span class="job">${userData.profession ?? 'не указано'}</span></div>
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="earth svg"></div>Страна:</h6><span class="country">${userCountry}</span></div>
          </div>
          <div class="profile-info__buttons">
            <button class="button-profile svg-container"><div class="svg"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>Редактировать</button>
            <button class="button-profile svg-container"><div class="svg"><i class="fa fa-sign-out" aria-hidden="true"></i></div>Выход</button>
          </div>
        </div>  
        <div class="toolbar"> 
          <button class="button-profile-toolbar profile-toolbar active" onclick="document.querySelector('.settings-toolbar')?.classList.remove('active'); document.querySelector('.profile-toolbar')?.classList.add('active');  document.querySelector('.page1')?.classList.toggle('hidden3'); document.querySelector('.page2')?.classList.toggle('hidden4');">ПРОФИЛЬ</button>
          <button class="button-profile-toolbar settings-toolbar" onclick="document.querySelector('.profile-toolbar')?.classList.remove('active'); document.querySelector('.settings-toolbar')?.classList.add('active'); document.querySelector('.page1')?.classList.toggle('hidden3'); document.querySelector('.page2')?.classList.toggle('hidden4');">НАСТРОЙКИ</button>
          <button class="button-profile-toolbar svg-container"><div class="exit svg"></div></button>
        </div>
      </div>
      <div class="profile-info-form-container page1">
        <h2 class="dark-grey">Персональная информация</h2>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-user" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h2>${user.user}</h2>
                <h5>Имя</h5>
              </div>
        </div>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>${user.email}</h4>
                <h5>Email</h5>
              </div>
        </div>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-birthday-cake" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>${userData.birdthDate ?? 'не указано'}</h4>
                <h5>День рождения</h6>
              </div>
        </div>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>Техника</h4>
                <h5>Сфера деятельности</h5>
              </div>
        </div>
        <h2 class="dark-grey">Данные аккаунта</h2>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>${userData.regTime.toString().slice(0, 10).replace(/-/g, ' ')}</h4>
                <h5>Дата регистрации</h5>
              </div>
        </div>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-star" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>${userData.accStatus ?? 'Базовый'}</h4>
                <h5>Статус аккаунта</h5>
              </div>
        </div>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-battery-half" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>10</h4>
                <h5>Кол-во тренировок</h5>
              </div>
        </div>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-heart" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>Мемори</h4>
                <h5>Любимый тренажер</h5>
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
      <div class="profile-form input-logo">
              <form method="post" enctype="multipart/form-data">
                <label class="input-file svg-container">
                  <div class="input-box">
                    <span class="input-file-text" type="text"></span>
                    <label><h5>Загрузить фото</h5></label>
                    <input class="input-file" type="file" name="file">
                    <span class="input-file-text-1">Максимум 5мб</span>
                  </div>
                </label>
              </form>
      </div>
      <button class="button-profile end">Сохранить</button>
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
