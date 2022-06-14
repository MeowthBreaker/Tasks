const tooltipedElems = [...document.body.querySelectorAll('.tooltiped')];
const tooltipOriginal = document.createElement('div');

tooltipOriginal.classList.add('tooltip');
tooltipOriginal.hidden = true;
document.body.appendChild(tooltipOriginal);

const tooltipHeight = tooltipOriginal.offsetHeight;
const tooltipWidth = tooltipOriginal.offsetWidth;
const tooltipPadding = 5;

tooltipedElems.forEach((elem) => {
  elem.addEventListener('mouseenter', (e) => {
    let tooltipText = elem.dataset.tooltip;
    tooltipOriginal.textContent = tooltipText;

    let r = elem.getBoundingClientRect();


  });

  elem.addEventListener('mouseleave', (e) => {
    tooltipOriginal.hidden = !tooltipOriginal.hidden;
  });
});