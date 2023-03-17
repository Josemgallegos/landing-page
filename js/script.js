//Almacenar el primer elemento con la clase ".menu"
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Modificar clase de la variable menuBtn por medio de una arrow function al hacer click sobre el elemento
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
    