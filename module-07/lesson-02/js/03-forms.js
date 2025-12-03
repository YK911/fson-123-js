/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */
const form = document.querySelector('.js-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // const formData = Object.fromEntries(new FormData(form));
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

  const formData = {
    comment: form.elements.comment.value,
    password: form.elements.password.value,
    mail: form.elements.email.value,
  };

  // console.log(formData);

  form.reset();
}
