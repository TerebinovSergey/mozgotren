import { getElement, submitForm } from '../../../utils/utils';

const formValidation = async (e: Event) => {
  const inputType = (e.target as HTMLInputElement).name;
  const inputValue = (e.target as HTMLInputElement).value;
  const inputTypesAndValuesArray = [...document.querySelectorAll('.form-control')];

  if (document.querySelector('.form-warning')) {
    [...document.querySelectorAll('.form-warning')].forEach((item) => {
      item.remove();
    });
  }

  const errMsgGenerator = (msg: string, idValue: string) => {
    const formWarning = document.createElement('div');
    formWarning.classList.add('form-warning');
    formWarning.innerHTML = msg;
    if (typeof inputType !== 'undefined') {
      ((e.target as HTMLElement).parentElement as HTMLElement).append(formWarning);
    } else if ([...inputTypesAndValuesArray].includes(document.getElementById(`${idValue}`) as HTMLElement)) {
      (getElement(`#${idValue}`).parentElement as HTMLElement).append(formWarning);
    }
  };

  const checkEmail = (value?: string) => {
    const result = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    if (!result) {
      errMsgGenerator('неправильный формат e-mail', 'email');
    }
  };

  const checkName = (value?: string) => {
    if ((value as string).length < 3) {
      errMsgGenerator('слишком короткое имя', 'name');
      return;
    }
    if ((typeof value === 'undefined') || (typeof value !== 'undefined' && (value as string).length > 20)) {
      errMsgGenerator('слишком длинное имя', 'name');
    }
  };

  const checkPassword = (value?: string, id?: string) => {
    if (id === 'password') {
      if ((value as string).length < 6) {
        errMsgGenerator('пароль слишком короткий', 'password');
      }
    } else if (id === 'password-confirm') {
      if ((getElement('#password') as HTMLInputElement).value !== (getElement('#password-confirm') as HTMLInputElement).value) {
        errMsgGenerator('пароли не совпадают', 'password-confirm');
      }
    }
  };

  if (typeof inputType !== 'undefined') {
    switch (inputType) {
      case 'email':
        checkEmail(inputValue);
        break;
      case 'name':
        checkName(inputValue);
        break;
      case 'password':
        checkPassword(inputValue);
        break;
      default:
    }
  } else if (inputTypesAndValuesArray.length === 2) {
    checkEmail((inputTypesAndValuesArray[0] as HTMLInputElement).value);
    checkPassword(
      (inputTypesAndValuesArray[1] as HTMLInputElement).value,
      (inputTypesAndValuesArray[1] as HTMLInputElement).id,
    );
    if ([...document.querySelectorAll('.form-warning')].length === 0) {
      submitForm('login');
    }
  } else {
    checkName((inputTypesAndValuesArray[0] as HTMLInputElement).value);
    checkEmail((inputTypesAndValuesArray[1] as HTMLInputElement).value);
    checkPassword(
      (inputTypesAndValuesArray[2] as HTMLInputElement).value,
      (inputTypesAndValuesArray[2] as HTMLInputElement).id,
    );
    checkPassword(
      (inputTypesAndValuesArray[3] as HTMLInputElement).value,
      (inputTypesAndValuesArray[3] as HTMLInputElement).id,
    );
    if ([...document.querySelectorAll('.form-warning')].length === 0) {
      const formValues = {
        username: (getElement('#name') as HTMLInputElement).value,
        email: (getElement('#email') as HTMLInputElement).value,
        password: (getElement('#password') as HTMLInputElement).value,
      };
      try {
        const result = await submitForm(formValues);
        const responseObj = await result.json();
        console.log(responseObj);
        if (!result.ok) {
          (document.querySelector('.login-box__msg') as HTMLElement).style.color = '#ff0000';
          (document.querySelector('.login-box__msg') as HTMLElement).innerHTML = responseObj.message;
        } else {
          (document.querySelector('.login-box__msg') as HTMLElement).style.color = '#008000';
          (document.querySelector('.login-box__msg') as HTMLElement).innerHTML = responseObj.message;
          setTimeout(() => {
            window.history.pushState(formValues, '', '/login');
            window.location.href = '/login';
          }, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
export default formValidation;
