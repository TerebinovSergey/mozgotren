import formValidation from '../components/view/login-form/form-validation';
import '../assets/styles/pages/login.css';
import loginForm from '../components/view/login-form/loginForm';

const registrationPage = () => {
  const body = document.querySelector('body');
  if (document.querySelector('.register-page')) {
    document.querySelector('.register-page')?.remove();
  }

  const registerPageWrapper = document.createElement('div');
  registerPageWrapper.classList.add('register-page');

  const registerBox = document.createElement('div');
  registerBox.classList.add('register-box');

  const registerLogo = document.createElement('div');
  registerLogo.classList.add('register-logo');

  const registerLogoLink = document.createElement('a');
  registerLogoLink.href = '/';

  const registerLogoImg = document.createElement('img');
  registerLogoImg.src = './assets/logo_blue.png';
  registerLogoImg.alt = 'logo-blue';

  const registerBoxH3 = document.createElement('h3');
  registerBoxH3.innerHTML = 'Регистрация в ';

  const registerBoxLink = document.createElement('a');
  registerBoxLink.href = '/';
  registerBoxLink.innerHTML = 'Mozgotren';

  const registerBoxBody = loginForm('register');

  const registerBoxBodyRow = document.createElement('div');
  registerBoxBodyRow.classList.add('row');

  const registerBoxBodyButton = document.createElement('div');
  registerBoxBodyButton.classList.add('register-button');
  registerBoxBodyButton.innerHTML = 'Зарегистрироваться';
  registerBoxBodyButton.addEventListener('click', (e: Event) => {
    formValidation(e);
  });

  const loginPageLinkWrapper = document.createElement('div');
  loginPageLinkWrapper.classList.add('login-link');

  const loginPageLink = document.createElement('a');
  loginPageLink.href = './login';
  loginPageLink.innerHTML = '<i class="fa fa-sign-in" aria-hidden="true"></i> Вход';
  loginPageLinkWrapper.append(loginPageLink);

  registerBoxBodyRow.append(registerBoxBodyButton);
  registerBoxBody.append(registerBoxBodyRow, loginPageLinkWrapper);
  registerBoxH3.append(registerBoxLink);
  registerLogoLink.append(registerLogoImg);
  registerLogo.append(registerLogoLink, registerBoxH3);
  registerBox.append(registerLogo, registerBoxBody);
  registerPageWrapper.append(registerBox);
  body?.append(registerPageWrapper);

  [...document.querySelectorAll('.form-control')].forEach((item) => {
    item.addEventListener('change', (e: Event) => {
      formValidation(e);
    });
  });
};

export default registrationPage;
