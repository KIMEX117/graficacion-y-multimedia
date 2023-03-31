class Exeggutor {
    constructor(img) {
        this.img = img;
        this.x = width;
        this.s = 70;
        this.y = height - this.s;
        this.SPEED = -6;
    }

    draw() {
        noFill();
        //rect(this.x, this.y, this.s, this.s);
        ellipseMode(CORNER);
        ellipse(this.x, this.y, this.s, this.s);
        image(this.img, this.x, this.y, this.s, this.s);
    }

    move() {
        this.x += this.SPEED;
    }
}