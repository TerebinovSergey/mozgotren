import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import { getElement, isUserCheck, isUserEmail } from '../utils/utils';

export default class ProfilePage {
  static draw(): void {
    const header = new HeaderView();
    header.draw();
    ProfilePage.drawMain();
    const footer = new FooterView();
    footer.draw();
  }

  static drawMain() {
    const main = document.createElement('main');
    main.classList.add('trenagors-main');
    main.innerHTML = this.getMainHTML();
    const header = getElement('header');
    header.after(main);
  }

  static getMainHTML() {
    return `<div class="container">
      <div class="profile-title-wrapper">
      <div class="profile-comtainer">
        <div class="profile-image"></div>
        <div class="profile-info">
          <h2 class="profile-title">${isUserCheck()}</h2>
          <h6 class="profile-text">${isUserEmail()}</h6>
        </div> 
        <hr class="vertical-line" > 
        <div class="profile-info">
          <div class="profile-text-c"><h6 class="profile-text">Возраст:</h6><span class="age">${document.querySelector('#country')?.innerHTML}</span></div>
          <div class="profile-text-c"><h6 class="profile-text">Сфера деятельности:</h6><span class="job">${document.querySelector('#job')?.textContent}</span></div>
          <div class="profile-text-c"><h6 class="profile-text">Страна:</h6><span class="country">${document.querySelector('#country')?.textContent}</span></div>
        </div>
        <button class="button-profile">Редактировать</button>
      </div>
      <div class="toolbar"></div>
      <h4 class="birth-title">Персональная информация:</h4>
      <div class="input-box">
        <label>Имя</label>
        <input type="text">
      </div>
      <div class="input-box">
        <label>Email</label>
        <input type="email">
      </div>
      <div class="input-box">
        <label><h5>Сфера деятельности:</h5></label>
        <select id="job" value="3">
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
      <form method="post" enctype="multipart/form-data">
      
        <label class="input-file">
          <div class="input-box">
            <span class="input-file-text" type="text"></span>
            <label>Загрузить фото</label>
	   	      <input class="input-file" type="file" name="file">
             <span class="input-file-text-1">Максимум 5мб</span>
          </div>        
 	      </label>
      </form>
      <div class="profile-image"></div>
      <button class="button-profile">Сохранить</button>
      <h4 class="birth-title v">Настройки</h4>
      <label class="checkbox-ios">
      <input type="checkbox" checked disabled>
      <span class="checkbox-ios-switch"></span>
    </label>
    <h4 class="birth-title v">звук в тренажерах</h4>
      <h4 class="birth-title">Изменить пароль:</h4>
      <div class="input-box">
        <label>Новый пароль</label>
        <input type="password">
      </div>
      <div class="input-box">
      <label>Повторите пароль</label>
       <input type="password">
    </div>
    <button class="button-profile">Сохранить пароль</button>
    </div>`;
  }
}
