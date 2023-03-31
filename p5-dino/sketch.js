const SPACE_BLANK = " ";
let bgImg;
let bg1;
let bg2;
let rapidashImg;
let rapidash;
let exeggutorImg;
const exeggutors = [];

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
    if(random(1) < 0.005) {
        exeggutors.push(new Exeggutor(exeggutorImg));
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
    }

    bg1.scroll();
    bg2.scroll();

    rapidash.update();
}

function keyPressed() {
    if(key === SPACE_BLANK) {
        console.log('Jump');
        rapidash.jump();
    }
}