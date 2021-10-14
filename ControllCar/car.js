const step = 5;
const delay = '.4s';
let rotate = 90;
const degree = 0;
const keyLeft = 37;
const keyUp = 38;
const keyRight = 39;
const keyDown = 40;

function moveToRight(){
    let car = document.getElementById('car');
    // car.src = "images/right.jpg";
    // car.style.height = "97px";
    // car.style.width = "200px";
    car.style.transform = `rotate(0deg)`;
    car.style.transition = delay;
    let carWidth = parseInt(car.style.width);
    let frameWidth = window.innerWidth;
    let xPosition = parseInt(car.style.left);
    if(xPosition + carWidth + step <= frameWidth ){
        car.style.left = `${xPosition + step}px`;
    }
}

function moveToLeft(){
    let car = document.getElementById('car');
    // car.src = "images/left.jpg";
    // car.style.height = "97px";
    // car.style.width = "200px";
    car.style.transform = `rotate(${180}deg)`;
    car.style.transition = delay;
    let xPosition = parseInt(car.style.left);
    if(xPosition > 0 ){
        car.style.left = `${xPosition - step}px`;
    }
}

function moveToDown(){
    let car = document.getElementById('car');
    // car.src = "images/down.jpg";
    // car.style.width = "97px";
    // car.style.height = "200px";
    car.style.transform = `rotate(${90}deg)`;
    car.style.transition = delay;
    let carHeigth = parseInt(car.style.height);
    let frameHeight = window.innerHeight;
    let yPosition = parseInt(car.style.top);
    if(yPosition + carHeigth + step <= frameHeight ){
        car.style.top = `${yPosition + step}px`;
    }
}

function moveToUp(){
    let car = document.getElementById('car');
    car.style.transform = `rotate(${270}deg)`;
    car.style.transition = delay;
    let yPosition = parseInt(car.style.top);
    if(yPosition > 0 ){
        car.style.top = `${yPosition - step}px`;
    }
}

function controllCar(event){
    switch(event.keyCode){
        case keyRight:{
            moveToRight();
            break;
        }
        case keyDown:{
            moveToDown();
            break;
        }
        case keyLeft:{
            moveToLeft();
            break;
        }
        case keyUp:{
            moveToUp();
            break;
        }
        default:{
            alert('please using arrow keys to controll the car!');
        }
    }
}

function initGame(){
    let car = document.getElementById('car');
    car.src = "images/right.jpg";
    car.style.width = "200px";
    car.style.height = "97px";
    car.style.position = "relative";
    car.style.top = 0;
    car.style.left = 0;

    window.addEventListener('keydown', controllCar);
}

initGame();