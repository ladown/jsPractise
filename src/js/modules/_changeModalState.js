'use strict';

import checkNumInputs from './_checkNumInputs';

export default function changeModalState(state) {
  const windowForm = document.querySelectorAll(`.balcon_icons_img`);
  const windowWidht = document.querySelectorAll(`#width`);
  const windowHeight = document.querySelectorAll(`#height`);
  const windowType = document.querySelectorAll(`#view_type`);
  const windowProfile = document.querySelectorAll(`.checkbox`);

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case `SPAN`:
            state[prop] = index;
            break;
          case `INPUT`:
            if (item.getAttribute(`type`) === `checkbox`) {
              index === 0 ? (state[prop] = `Холодное`) : (state[prop] = `Теплое`);
              elem.forEach((box, i) => {
                box.checked = false;
                if (index === i) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case `SELECT`:
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElems(`click`, windowForm, 'form');
  bindActionToElems(`input`, windowWidht, 'width');
  bindActionToElems(`input`, windowHeight, 'height');
  bindActionToElems(`change`, windowType, 'type');
  bindActionToElems(`change`, windowProfile, 'profile');

  checkNumInputs(`#width`);
  checkNumInputs(`#height`);
}
