import './carouselModule.css';
import triangle from '../img/triangle.svg'


export default (containerClass) => {
  const container = document.querySelector(`${containerClass}`);
  container.classList.add('mainContainer');

  const leftArrowDiv = document.createElement('div');
  leftArrowDiv.classList.add('arrowDiv');
  leftArrowDiv.classList.add('arrowLeft');
  const leftArrowImg = document.createElement('img')
  leftArrowImg.src = triangle;
  leftArrowDiv.appendChild( leftArrowImg);

  
  const rightArrowDiv = document.createElement('div');
  rightArrowDiv.classList.add('arrowDiv');
  rightArrowDiv.classList.add('arrowRight');
  const rightArrowImg = document.createElement('img')
  rightArrowImg.src = triangle;
  rightArrowDiv.appendChild( rightArrowImg);


  container.appendChild(leftArrowDiv);
  container.appendChild(rightArrowDiv);
};
