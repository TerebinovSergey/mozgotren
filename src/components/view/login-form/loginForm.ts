import '../../../assets/styles/components/login-form.css';

export const loginForm = (param: string) => {
  const loginBoxBody = document.createElement('div');
  loginBoxBody.classList.add('login-box__body');

  const loginBoxBodyForm = document.createElement('form');
  loginBoxBodyForm.action = './login';
  loginBoxBodyForm.method = 'POST';

  const formElements: HTMLDivElement[] = [];

  const formGroupName = document.createElement('div');
  formGroupName!.classList.add('form-group', 'has-feedback');
  !!(param === 'register') && formElements.push(formGroupName);

  const formGroupEmail = document.createElement('div');
  formGroupEmail.classList.add('form-group', 'has-feedback');
  formElements.push(formGroupEmail);

  const formGroupPassword = document.createElement('div');
  formGroupPassword.classList.add('form-group', 'has-feedback');
  formElements.push(formGroupPassword);

  const formGroupPasswordConfirm = document.createElement('div');
  formGroupPasswordConfirm!.classList.add('form-group', 'has-feedback');
  !!(param === 'register') && formElements.push(formGroupPasswordConfirm);


  loginBoxBodyForm.append(...formElements);
  loginBoxBody.append(loginBoxBodyForm);
  return loginBoxBody;
}
// loginBoxBody.innerHTML = '<i class="fa-solid fa-envelope"></i><i class="fa-solid fa-lock"></i>';