let container = document.querySelector(".container");
let height = container.clientHeight;
let width = container.clientWidth;

const addBalls = (number) => {
  for (let i = 0; i < number; i++) {
    container.innerHTML += '<div class="ball"></div>';
  }
};

const move = (ball) => {
  let top = Math.random() * height;
  let left = Math.random() * width;

  setInterval(() => {
    top = updateCoordinate(top, height, 0);
    ball.style.top = top + "px";

    left = updateCoordinate(left, width, 0);
    ball.style.left = left + "px";

    ball.style.opacity = Math.random();
  }, 100);
};

const updateCoordinate = (initialValue, upperMargin, lowerMargin) => {
  let newValue = initialValue;
  let delta = (Math.random() - 0.5) * 100;
  newValue += delta;
  if (newValue < lowerMargin) {
    newValue = lowerMargin;
  }
  if (newValue > upperMargin) {
    newValue = upperMargin;
  }
  return newValue;
};

const startMovement = () => {
  let balls = document.querySelectorAll(".ball");
  balls.forEach((ball) => {
    move(ball);
  });
};

addBalls(30);
startMovement();
