const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyRef: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  const indexColor = randomIntegerFromInterval(0, colors.length - 1);
  const color = colors[indexColor];

  refs.bodyRef.style.backgroundColor = color;
};

let intervalId = null;

refs.btnStart.addEventListener('click', event => {
  intervalId = setInterval(randomColor, 1000);
  event.target.disabled = true;
});

refs.btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  refs.btnStart.disabled = false;
});
