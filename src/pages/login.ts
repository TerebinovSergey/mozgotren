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

  // const result = await fetch(`${baseUrl}/users`, {
  //   method: 'GET'
  // });
  // const users = await result.json();
  // console.log(users);

  loginBoxH3.append(loginBoxLink);
  loginLogoLink.append(loginLogoImg);
  loginLogo.append(loginLogoLink, loginBoxH3);
  loginBox.append(loginLogo, loginBoxBody);
  loginPageWrapper.append(loginBox);
  body?.append(loginPageWrapper);
}