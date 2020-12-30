export default function images() {
  const imgModal = document.createElement(`div`);
  const workSection = document.querySelector(`.works`);
  const openImg = document.createElement(`img`);

  imgModal.classList.add(`popup`);
  workSection.appendChild(imgModal);

  imgModal.style.cssText = `
  align-items: center;
  justify-content: center;
  display = none;
  `;

  imgModal.appendChild(openImg);

  workSection.addEventListener(`click`, (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains(`preview`)) {
      imgModal.style.display = `flex`;
      document.body.classList.remove(`modal-open`);

      const path = target.parentNode.getAttribute(`href`);

      openImg.setAttribute(`src`, path);
    }

    if (target && target.matches(`div.popup`)) {
      imgModal.style.display = `none`;
    }
  });
}
