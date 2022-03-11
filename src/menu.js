import img1 from '../dist/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg';
import img2 from '../dist/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
import img3 from '../dist/images/asnim-ansari-SqYmTDQYMjo-unsplash.jpg';
import img4 from '../dist/images/brooke-lark-jUPOXXRNdcA-unsplash.jpg'
import img5 from '../dist/images/brooke-lark-M4E7X3z80PQ-unsplash.jpg';
import img6 from '../dist/images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg';


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
    foodImg1.setAttribute('src', img1);
    foodImg2.setAttribute('src', img2);
    foodImg3.setAttribute('src', img3);
    foodImg4.setAttribute('src', img4);
    foodImg5.setAttribute('src', img5);
    foodImg6.setAttribute('src', img6);
}

export default openMenu;