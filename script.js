let container = document.querySelector(".container");
let height = container.clientHeight;
let width = container.clientWidth;

const addStars = (number) => {
  for (let i = 0; i < number; i++) {
    container.innerHTML += '<div class="star"></div>';
  }
};

const move = (star) => {
  let top = Math.random() * height;
  let left = Math.random() * width;

  setInterval(() => {
    top = updateCoordinate(top, height, 0);
    star.style.top = top + "px";

    left = updateCoordinate(left, width, 0);
    star.style.left = left + "px";

    star.style.opacity = Math.random();
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
  let stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    move(star);
  });
};

addStars(100);
startMovement();
