import '../../../assets/styles/components/login-form.css';

const loginForm = (param: string, state?: { username: string, email: string }) => {
  const loginBoxBody = document.createElement('div');
  loginBoxBody.classList.add('login-box__body');

  const loginBoxBodyForm = document.createElement('form');
  loginBoxBodyForm.action = './login';
  loginBoxBodyForm.method = 'POST';

  const formElements: HTMLDivElement[] = [];

  const loginBoxMsg = document.createElement('p');
  loginBoxMsg.classList.add('login-box__msg');
  loginBoxBody.append(loginBoxMsg);

  const formGroupName = document.createElement('div');
  formGroupName!.classList.add('form-group', 'has-feedback');

  const inputName = document.createElement('input');
  inputName.classList.add('form-control');
  inputName.id = 'name';
  inputName.name = 'name';
  inputName.type = 'text';
  inputName.placeholder = 'Имя';

  const inputNameIcon = document.createElement('div');
  inputNameIcon.classList.add('form-control__icon');
  inputNameIcon.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i>';

  formGroupName.append(inputName, inputNameIcon);
  if (param === 'register') {
    formElements.push(formGroupName);
  }

  const formGroupEmail = document.createElement('div');
  formGroupEmail.classList.add('form-group', 'has-feedback');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('form-control');
  inputEmail.id = 'email';
  inputEmail.name = 'email';
  inputEmail.type = 'email';
  inputEmail.value = state?.email ?? '';
  inputEmail.placeholder = 'E-mail';

  const inputEmailIcon = document.createElement('div');
  inputEmailIcon.classList.add('form-control__icon');
  inputEmailIcon.innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>';

  formGroupEmail.append(inputEmail, inputEmailIcon);
  formElements.push(formGroupEmail);

  const formGroupPassword = document.createElement('div');
  formGroupPassword.classList.add('form-group', 'has-feedback');

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('form-control');
  inputPassword.id = 'password';
  inputPassword.name = 'password';
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Пароль';

  const inputPasswordIcon = document.createElement('div');
  inputPasswordIcon.classList.add('form-control__icon');
  inputPasswordIcon.innerHTML = '<i class="fa fa-lock" aria-hidden="true"></i>';

  formGroupPassword.append(inputPassword, inputPasswordIcon);
  formElements.push(formGroupPassword);

  const formGroupPasswordConfirm = document.createElement('div');
  formGroupPasswordConfirm!.classList.add('form-group', 'has-feedback');

  const inputPasswordConfirm = document.createElement('input');
  inputPasswordConfirm.classList.add('form-control');
  inputPasswordConfirm.id = 'password-confirm';
  inputPasswordConfirm.name = 'password';
  inputPasswordConfirm.type = 'password';
  inputPasswordConfirm.placeholder = 'Подтверждение пароля';

  const inputPasswordConfirmIcon = document.createElement('div');
  inputPasswordConfirmIcon.classList.add('form-control__icon');
  inputPasswordConfirmIcon.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';

  formGroupPasswordConfirm.append(inputPasswordConfirm, inputPasswordConfirmIcon);
  if (param === 'register') {
    formElements.push(formGroupPasswordConfirm);
  }

  loginBoxBodyForm.append(...formElements);
  loginBoxBody.append(loginBoxBodyForm);
  return loginBoxBody;
};

export default loginForm;
