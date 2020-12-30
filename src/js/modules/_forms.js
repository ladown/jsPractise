'use strict';

import checkNumInputs from './_checkNumInputs';

export default function forms(state) {
  const form = document.querySelectorAll(`form`);
  const inputs = document.querySelectorAll(`input`);

  checkNumInputs(`input[name="user_phone"]`);

  const mess = {
    loading: `Загрузка...`,
    succes: `Спасибо, скоро с Вами свяжеться наш оператор!`,
    failure: `Что-то пошло не так?!`,
  };

  const postData = async (url, data) => {
    document.querySelector(`.status`).textContent = mess.loading;

    let res = await fetch(url, {
      method: `POST`,
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input, index) => {
      input.value = '';
    });
  };

  form.forEach((formItem, index) => {
    formItem.addEventListener(`submit`, (e) => {
      e.preventDefault();

      let statusMessage = document.createElement(`div`);
      statusMessage.classList.add(`status`);
      formItem.appendChild(statusMessage);

      const formData = new FormData(formItem);

      if (formItem.getAttribute(`data-calc`) === `end`) {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData(`./assets/server.php`, formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = mess.succes;
        })
        .catch(() => {
          statusMessage.textContent = mess.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 15000);
        });
    });
  });
}
