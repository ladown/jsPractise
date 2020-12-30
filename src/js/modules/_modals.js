'use strict';

export default function modals() {
  function openModal(modalWindow, modalBtn, modalClose, closeClickOverlay = true) {
    const modal = document.querySelector(modalWindow);
    const btnToOpen = document.querySelectorAll(modalBtn);
    const closeBtn = document.querySelector(modalClose);
    const windows = document.querySelectorAll(`[data-modal]`);
    const scroll = calcScroll();

    btnToOpen.forEach((item) => {
      item.addEventListener(`click`, (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window) => {
          window.style.display = `none`;
        });

        modal.style.display = `block`;
        document.body.classList.add(`modal-open`);
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    modal.addEventListener(`click`, (e) => {
      if (e.target === modal && closeClickOverlay) {
        modal.style.display = `none`;
        document.body.classList.remove(`modal-open`);
        document.body.style.marginRight = `0px`;

        windows.forEach((window) => {
          window.style.display = `none`;
        });
      }
    });

    closeBtn.addEventListener(`click`, () => {
      windows.forEach((window) => {
        window.style.display = `none`;
      });

      modal.style.display = `none`;
      document.body.classList.remove(`modal-open`);
      document.body.style.marginRight = `0px`;
    });
  }

  function showBodalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = `block`;
      document.body.classList.add(`modal-open`);
    }, time);
  }

  function calcScroll() {
    let divBlock = document.createElement('div');

    divBlock.style.width = '50px';
    divBlock.style.height = '50px';
    divBlock.style.overflowY = 'scroll';
    divBlock.style.visibility = 'hidden';

    document.body.appendChild(divBlock);

    let scrollWidth = divBlock.offsetWidth - divBlock.clientWidth;

    divBlock.remove();

    return scrollWidth;
  }

  openModal(`.popup_engineer`, `.header_btn`, `.popup_engineer_close`);
  openModal(`.popup`, `.phone_link`, `.popup .popup_close`);
  openModal(`.popup_calc`, `.popup_calc_btn`, `.popup_calc_close`);
  openModal(`.popup_calc_profile`, `.popup_calc_button`, `.popup_calc_profile_close`, false);
  openModal(`.popup_calc_end`, `.popup_calc_profile_button`, `.popup_calc_end_close`, false);

  showBodalByTime(`.popup`, 60000);
}
