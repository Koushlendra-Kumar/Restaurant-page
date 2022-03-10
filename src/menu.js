function openMenu(){
    const mainBody = document.querySelector('.main-body');
    mainBody.textContent = '';
    mainBody.classList.remove('credit-body');
    mainBody.classList.remove('home-body');
    mainBody.classList.add('menu-body');
    const foodImg1 = document.createElement('img');
    const foodImg2 = document.createElement('img');
    const foodImg3 = document.createElement('img');
    const foodImg4 = document.createElement('img');
    const foodImg5 = document.createElement('img');
    const foodImg6 = document.createElement('img');
    mainBody.appendChild(foodImg1);
    mainBody.appendChild(foodImg2);
    mainBody.appendChild(foodImg3);
    mainBody.appendChild(foodImg4);
    mainBody.appendChild(foodImg5);
    mainBody.appendChild(foodImg6);
    foodImg1.setAttribute('src','../src/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg');
    foodImg2.setAttribute('src','../src/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg');
    foodImg3.setAttribute('src','../src/images/asnim-ansari-SqYmTDQYMjo-unsplash.jpg');
    foodImg4.setAttribute('src','../src/images/brooke-lark-jUPOXXRNdcA-unsplash.jpg');
    foodImg5.setAttribute('src','../src/images/brooke-lark-M4E7X3z80PQ-unsplash.jpg');
    foodImg6.setAttribute('src','../src/images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg');
}

export default openMenu;