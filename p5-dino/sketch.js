let bgImg;
let bg1;
let bg2;
let rapidashImg;
let rapidash;

function preload() {
    bgImg = loadImage('assets/bg.png');
    rapidashImg = loadImage('assets/rapidash.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    rapidash = new Rapidash(rapidashImg);
}

function draw() {
    bg1.draw();
    bg2.draw();
    rapidash.draw();

    bg1.scroll();
    bg2.scroll();
}