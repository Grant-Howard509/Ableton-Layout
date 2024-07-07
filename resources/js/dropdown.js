// Get references: .menu-button, .ableton-logo and  .primary-list
const menuButton = document.querySelector('.menu-button');
const abletonLogo = document.querySelector('.logo');
const primaryList = document.querySelector('.primary-list');

menuButton.addEventListener('click', () => {
    console.log('menu clicked');
    primaryList.classList.toggle('primary-list-active');
    menuButton.classList.toggle('menu-button-active');
    abletonLogo.classList.toggle('logo-active');
}); 