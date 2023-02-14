import HeaderView from '../components/view/header/headerView';
import FooterView from '../components/view/footer/footerView';
import {
  getElement,
  baseUrl,
  getUserIdFromCookie,
} from '../utils/utils';
import { UserData, SessionData } from '../types/types';

function isImageFile(file: File): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const buffer = reader.result as ArrayBuffer;
      const arr = new Uint8Array(buffer).subarray(0, 4);
      let header = '';
      for (let i = 0; i < arr.length; i += 1) {
        header += arr[i].toString(16);
      }
      if (header === '89504e47') {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    reader.addEventListener('error', (error) => {
      reject(error);
    });

    reader.readAsArrayBuffer(file);
  });
}

const uploadForm = async () => {
  const formData = new FormData();
  const userId = getUserIdFromCookie()[0][1];
  const userName = (document.getElementById('name') as HTMLInputElement).value;
  const userProfession = (document.getElementById('job') as HTMLSelectElement).value;
  const country = (document.getElementById('country') as HTMLInputElement).value;
  const day = (document.getElementById('day') as HTMLInputElement).value;
  const month = (document.getElementById('month') as HTMLInputElement).value;
  const year = (document.getElementById('year') as HTMLInputElement).value;
  const image = ((document.getElementById('image') as HTMLInputElement).files as FileList)[0];

  let birdthDate = '';
  if (day.length > 0 && month.length > 0 && year.length > 0) {
    birdthDate = new Date(+year, +month, +day).toLocaleDateString();
  }
  formData.append('userId', userId);
  if (userName.length > 0) formData.append('username', userName);
  if (userProfession.length > 0) formData.append('userProfession', userProfession);
  if (country.length > 0) formData.append('country', country);
  if (birdthDate.length > 0) formData.append('birdthDate', birdthDate);
  if (typeof image !== 'undefined') {
    if (await isImageFile(image)) {
      formData.append('image', image);
    }
  }
  fetch(`${baseUrl}/upload-userdata`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

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

    const sendButton = document.querySelector('.send-form');
    sendButton?.addEventListener('click', async () => {
      uploadForm();
    });

    (document.getElementById('image') as HTMLInputElement).addEventListener('change', async function handleImage() {
      if (await isImageFile((this.files as FileList)[0])) {
        (this.nextElementSibling as HTMLElement).style.color = '#008000';
        (this.nextElementSibling as HTMLElement).innerHTML = (this.files as FileList)[0].name;
      } else {
        (this.nextElementSibling as HTMLElement).innerHTML = 'неподдерживаемый формат файла';
        (this.nextElementSibling as HTMLElement).style.color = '#ff0000';
      }
    });
  }

  static getMainHTML(user: SessionData, userData: UserData, userCountry: string) {
    const getUserImage = () => {
      if (userData.imagePath !== null) {
        return `<img src = ${baseUrl}/${userData.imagePath}>`;
      }
      return '<img src="./assets/null.jpg">';
    };

    const getAge = () => {
      if (Date.parse(userData.birdthDate as string) < Date.now()) {
        return `${Math.floor(Math.abs(Date.now() - Date.parse(userData.birdthDate as string)) / (1000 * 60 * 60 * 24 * 365))}`;
      }
      return 'не указано';
    };

    return `
    <div class="container-profile">
      <div class="profile-title-wrapper">
      <div class="profile-container">
        <div class="profile-info-container ">
          <div class="profile-image">
          ${getUserImage()}
          </div>
          <div class="profile-info">
            <h2 class="profile-title">${user.user}</h2>
            <h3 class="profile-text">${user.email}</h3>
          </div> 
          <hr class="vertical-line" > 
          <div class="profile-info">
            <div class="profile-text-c"><h6 class="profile-text svg-container"><div class="null svg"></div>Возраст:</h6><span class="age">${getAge()}</span></div>
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
                <h4>${userData.profession ?? 'не указано'}</h4>
                <h5>Сфера деятельности</h5>
              </div>
        </div>
        <h2 class="dark-grey">Данные аккаунта</h2>
        <div class="card-info row">
              <div class="svg"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></div>
              <div class="dark-grey">
                <h4>${userData.regTime?.toString().slice(0, 10).replace(/-/g, ' ')}</h4>
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
         <label for="name"><h5>Имя</h5></label>
         <input id="name" type="text" class="input-name" value="${user.user ?? 'укажите Ваше имя'}">
      </div>
      <div class="input-box">
          <label for="email-didabled"><h5>Email</h5></label>
          <input id="email-disabled" type="email" value="${user.email}" disabled>
      </div>
      <div class="input-box">
          <label for="job"><h5>Сфера деятельности:</h5></label>
            <select id="job">
              <option></option>
              <option>ИТ</option>
              <option>Бухгалтерия</option>
              <option>Техника</option>
              <option>Образование</option>
            </select>
      </div>
      <div class="input-box">
            <label for="country"><h5>Страна:</h5></label>
              <select id="country" autofocus="true">
                <option></option>
                <option>Армения</option>
                <option>Беларусь</option>
                <option>Казахстан</option>
                <option>Польша</option>
                <option>Россия</option>
                <option>Узбекистан</option>
                <option>Украина</option>
              </select>
      </div>
      <h4 class="birth-title">День рождения:</h4>
      <div class="birth-container">
              <div class="input-box">
                <label for="day">
                  <h5>День</h5>
                </label>
                <select id="day">
                  <option></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
              </div>
              <div class="input-box">
                <label for="month"><h5>Месяц:</h5></label>
                <select id="month">
                  <option></option>
                  <option value="0">Январь</option>
                  <option value="1">Февраль</option>
                  <option value="2">Март</option>
                  <option value="3">Апрель</option>
                  <option value="4">Май</option>
                  <option value="5">Июнь</option>
                  <option value="6">Июль</option>
                  <option value="7">Август</option>
                  <option value="8">Сентябрь</option>
                  <option value="9">Октябрь</option>
                  <option value="10">Ноябрь</option>
                  <option value="11">Декабрь</option>
                </select>
              </div>
              <div class="input-box">
                <label for="year"><h5>Год:</h5></label>
                <select id="year">
                  <option></option>
                  <option>1980</option>
                  <option>1981</option>
                  <option>1982</option>
                  <option>1983</option>
                  <option>1984</option>
                  <option>1985</option>
                  <option>1986</option>
                  <option>1987</option>
                  <option>1988</option>
                  <option>1999</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
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
                    <input class="input-file" type="file" name="file" id="image">
                    <span class="input-file-text-1">Максимум 512кБ (.png)</span>
                  </div>
                </label>
              </form>
      </div>
      <button class="button-profile end send-form">Сохранить</button>
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
