import './style.css';
import moduleCarousel from './moduleCarousel';
import triangle from '../img/triangle.svg'
import kid from '../img/kid.jpg';
import land from '../img/landscape.jpg'

moduleCarousel('.carouselMain');

const imgs = [...document.querySelectorAll('.carouselMain .box img')];
imgs[0].src = triangle;
imgs[1].src = kid;
imgs[2].src = land;

