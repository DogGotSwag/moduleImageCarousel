import './carouselModule.css';

export default ( containerClass ) => {
    const container = document.querySelector(`${containerClass}`);
    container.classList.add('mainContainer');
};
