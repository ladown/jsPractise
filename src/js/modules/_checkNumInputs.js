export default function checkNumInputs(selector) {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((numInput, index) => {
    numInput.addEventListener(`input`, () => {
      numInput.value = numInput.value.replace(/\D/, '');
    });
  });
}
