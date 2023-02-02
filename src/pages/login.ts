import '../assets/styles/pages/login.css';
import { loginForm } from '../components/view/login-form/loginForm';
import { baseUrl } from '../utils/utils';

export const loginPage = async () => {

  const body = document.querySelector('body');
  !!document.querySelector('.login-page') && document.querySelector('.login-page')?.remove();

  const loginPageWrapper = document.createElement('div');
  loginPageWrapper.classList.add('login-page');

  const loginBox = document.createElement('div');
  loginBox.classList.add('login-box');

  const loginLogo = document.createElement('div');
  loginLogo.classList.add('login-logo');

  const loginLogoLink = document.createElement('a');
  loginLogoLink.href = '/';

  const loginLogoImg = document.createElement('img');
  loginLogoImg.src = './assets/logo_blue.png';
  loginLogoImg.alt = 'logo-blue';

  const loginBoxH3 = document.createElement('h3');
  loginBoxH3.innerHTML = 'Авторизация в ';

  const loginBoxLink = document.createElement('a');
  loginBoxLink.href = '/';
  loginBoxLink.innerHTML = 'Mozgotren';

  const loginBoxBody = loginForm('login');

  const result = await fetch(`${baseUrl}/users`, {
    method: 'GET'
  });
  const users = await result.json();
  console.log(users);

  const loginBoxBodyRow = document.createElement('div');
  loginBoxBodyRow.classList.add('row', 'row-login');

  const loginBoxBodyCheckboxWrapper = document.createElement('div');
  loginBoxBodyCheckboxWrapper.classList.add('checkbox-wrapper');

  const loginBoxBodyLabel = document.createElement("Label");
  loginBoxBodyLabel.setAttribute("for", "login-checkbox");
  loginBoxBodyLabel.innerHTML = "Запомнить меня";

  const loginBoxBodyCheckbox = document.createElement('input');
  loginBoxBodyCheckbox.classList.add('login-checkbox');
  loginBoxBodyCheckbox.id = 'login-checkbox';
  loginBoxBodyCheckbox.type = 'checkbox';

  loginBoxBodyCheckboxWrapper.append(loginBoxBodyCheckbox, loginBoxBodyLabel);

  const loginBoxBodyButton = document.createElement('div');
  loginBoxBodyButton.classList.add('login-button');
  loginBoxBodyButton.innerHTML = 'Войти';

  const loginPageLinkWrapper = document.createElement('div');
  loginPageLinkWrapper.classList.add('login-link');

  const loginPageLink = document.createElement('a');
  loginPageLink.href = './register';
  loginPageLink.innerHTML = `<i class="fa-solid fa-address-card"></i> Регистрация`;
  loginPageLinkWrapper.append(loginPageLink);

  loginBoxBodyRow.append(loginBoxBodyCheckboxWrapper, loginBoxBodyButton);
  loginBoxBody.append(loginBoxBodyRow, loginPageLinkWrapper);

  loginBoxH3.append(loginBoxLink);
  loginLogoLink.append(loginLogoImg);
  loginLogo.append(loginLogoLink, loginBoxH3);
  loginBox.append(loginLogo, loginBoxBody);
  loginPageWrapper.append(loginBox);
  body?.append(loginPageWrapper);
}