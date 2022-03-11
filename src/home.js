function openHome(){
    const homeBody = document.querySelector('.main-body');
    homeBody.classList.add('home-body');
    homeBody.textContent = '';
    homeBody.classList.remove('menu-body');
    homeBody.classList.remove('credit-body');

    const marketingSlogan = document.createElement('div');
    const homeImage = document.createElement('div');
    const imgElem = document.createElement('img');
    const description = document.createElement('div');

    marketingSlogan.classList.add('slogan');
    homeImage.classList.add('image');
    description.classList.add('description');

    homeBody.appendChild(marketingSlogan);
    homeBody.appendChild(homeImage);
    homeBody.appendChild(description);
    homeImage.appendChild(imgElem);

    marketingSlogan.textContent = '"Life\'s too short for boring food."';
    description.textContent = 'Good food is always cooking! Go ahead, order some yummy items from the menu.';

    imgElem.src = './images/lily-banse--YHSwy6uqvk-unsplash.jpg';
}
export default openHome;