import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const newArray = localStorage.getItem('feedback-form-state');
const parce = JSON.parse(newArray);
if (parce) {
  email.value = parce.email;
  message.value = parce.message;
}

form.addEventListener('input', throttle(onInputFormAddValue, 500));

function onInputFormAddValue() {
  const array = {
    message: message.value,
    email: email.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(array));
}
form.addEventListener('submit', onButtonClick);

function onButtonClick(e) {
  const array = {
    message: message.value,
    email: email.value,
  };
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return;
  }
  console.log(array);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
}
