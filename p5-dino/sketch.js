const SPACE_BLANK = " ";
let bgImg;
let bg1;
let bg2;
let rapidashImg;
let rapidash;
let exeggutorImg;
const exeggutors = [];
let score = 0;
let timer = 1;

function preload() {
    bgImg = loadImage('assets/bg.png');
    rapidashImg = loadImage('assets/rapidash.png');
    exeggutorImg = loadImage('assets/exeggutor.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    rapidash = new Rapidash(rapidashImg);
}

function draw() {
    //&& (exeggutors[exeggutors.length-1].x < width - exeggutors[exeggutors.length-1].s)
    //Método anterior
    /* if(random(1) < 0.005) {
        exeggutors.push(new Exeggutor(exeggutorImg));
    } */
    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
        if(random(1) < 0.45 && timer == 0) {
            exeggutors.push(new Exeggutor(exeggutorImg));
        }
        if(timer==0) {
            timer = 1;
        }
    }
    
    bg1.draw();
    bg2.draw();
    rapidash.draw();
    for(let exeggutor of exeggutors) {
        exeggutor.draw();
        if(rapidash.collision(exeggutor)) {
            noLoop();
        }
        exeggutor.move();
        recordScore(exeggutor);
    }

    bg1.scroll();
    bg2.scroll();

    rapidash.update();

    textSize(32);
    fill(0, 0, 0);
    text('Puntaje: '+score, 40, 40);
}

function keyPressed() {
    if(key === SPACE_BLANK) {
        console.log('Jump');
        rapidash.jump();
    }
}

function recordScore(exeggutor) {
    if(exeggutor.x - -exeggutor.s <= 0 +-exeggutor.s) {
        score += 10;
        exeggutors.shift();
    }
}