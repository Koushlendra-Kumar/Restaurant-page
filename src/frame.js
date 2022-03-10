import openHome from "./home";
import openMenu from "./menu";
import openCredits from "./credit";

function openFrame(){
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const homeBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const creditBtn = document.createElement('div');
    const mainBody = document.createElement('div');
    const footer = document.createElement('div');
    
    header.classList.add('header');
    restaurantName.classList.add('restaurant-name');
    homeBtn.classList.add('nav-links');
    menuBtn.classList.add('nav-links');
    creditBtn.classList.add('nav-links');
    mainBody.classList.add('main-body');
    footer.classList.add('footer');

    content.appendChild(header);
    content.appendChild(mainBody);
    content.appendChild(footer);
    header.appendChild(restaurantName);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(creditBtn);

    restaurantName.textContent = 'Restaurant';
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    creditBtn.textContent = 'Credit';
    footer.textContent = 'Copyright \u00A9 The Odin Project 2022';

    openHome();
    homeBtn.addEventListener('click',openHome);
    menuBtn.addEventListener('click',openMenu);
    creditBtn.addEventListener('click', openCredits);
}

export default openFrame;