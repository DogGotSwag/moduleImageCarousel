import './carouselModule.css';
import triangle from '../img/triangle.svg';

function goLeft(shiftMin, currentShift, shiftMax) {
  let newCurrent = currentShift;
  if (newCurrent === shiftMin) {
    newCurrent = shiftMax;
  } else {
    newCurrent -= 100;
  }
  const container = document.querySelector('.mainContainer');
  container.style.cssText = `--shift: ${newCurrent}%;`;
  return newCurrent;
}

function goRight(shiftMin, currentShift, shiftMax) {
  let newCurrent = currentShift;
  if (newCurrent === shiftMax) {
    newCurrent = shiftMin;
  } else {
    newCurrent += 100;
  }
  const container = document.querySelector('.mainContainer');
  container.style.cssText = `--shift: ${newCurrent}%;`;
  return newCurrent;
}

function removeDot(){
  const currentDottedCircle = document.querySelector('.dotted');
  if( currentDottedCircle !== null){
    currentDottedCircle.classList.remove('dotted');
  }
}

function addDot(currentPostiton){
  const newDottedCircle = document.querySelector(`.P${currentPostiton}`);
  newDottedCircle.classList.add('dotted');
}

function addInititalDot(firstDotPosition) {
  const firstDot = document.querySelector(`.P${firstDotPosition}`);
  firstDot.classList.add('dotted');
}

export default (containerClass) => {
  const container = document.querySelector(`${containerClass}`);
  container.classList.add('mainContainer');

  const leftArrowDiv = document.createElement('div');
  leftArrowDiv.classList.add('arrowDiv');
  leftArrowDiv.classList.add('arrowLeft');
  const leftArrowImg = document.createElement('img');
  leftArrowImg.src = triangle;
  leftArrowDiv.appendChild(leftArrowImg);

  const rightArrowDiv = document.createElement('div');
  rightArrowDiv.classList.add('arrowDiv');
  rightArrowDiv.classList.add('arrowRight');
  const rightArrowImg = document.createElement('img');
  rightArrowImg.src = triangle;
  rightArrowDiv.appendChild(rightArrowImg);

  const circlesContainer = document.createElement('div');
  circlesContainer.classList.add('circleContainer');

  container.appendChild(leftArrowDiv);
  container.appendChild(rightArrowDiv);
  container.appendChild(circlesContainer);

  const divBoxes = document.querySelectorAll('.mainContainer .box');
  const divBoxesArray = [...divBoxes];

  let basis;
  if (divBoxesArray.length % 3 === 0) {
    basis = ((divBoxesArray.length - 1) / 2) * 100;
  } else {
    basis = (divBoxesArray.length / 2) * 100 - 50;
  }

  const shiftMin = basis * -1;
  let currentShift = shiftMin;
  const shiftMax = basis;

  for( let i = 0; i < divBoxesArray.length; i += 1){
    const newCircle = document.createElement('div');
    newCircle.classList.add('navCircle');
    newCircle.classList.add(`P${shiftMin+(i*100)}`);
    circlesContainer.appendChild(newCircle);
  }


  container.style.cssText = `--shift: ${shiftMin}%;`;
  addInititalDot(shiftMin);
  let myInterval = setInterval(() => {
    currentShift = goRight(shiftMin, currentShift, shiftMax);
    removeDot();
    addDot(currentShift);
  }, '5000');

  leftArrowDiv.addEventListener('click', () => {
    clearInterval(myInterval);
    myInterval = setInterval(() => {
      currentShift = goRight(shiftMin, currentShift, shiftMax);
    }, '5000');
    currentShift = goLeft(shiftMin, currentShift, shiftMax);
  });

  rightArrowDiv.addEventListener('click', () => {
    clearInterval(myInterval);
    myInterval = setInterval(() => {
      currentShift = goRight(shiftMin, currentShift, shiftMax);
    }, '5000');
    currentShift = goRight(shiftMin, currentShift, shiftMax);
  });
};
