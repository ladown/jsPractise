'use strict';

import slider from './slider';

import modals from './modules/_modals';
import tabs from './modules/_tabs';
import forms from './modules/_forms';
import changeModalState from './modules/_changeModalState';
import timer from './modules/_timer';
import images from './modules/_images';

window.addEventListener('DOMContentLoaded', () => {
  slider();

  let modalState = {};

  changeModalState(modalState);
  let deadline = '2021-01-01';

  modals();

  tabs(`.glazing_slider`, `.glazing_block`, `.glazing_content`, `active`);
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img  > img', 'do_image_more', `inline-block`);

  forms(modalState);

  timer('.container1', deadline);

  images();
});
