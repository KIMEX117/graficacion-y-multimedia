class Rapidash {
    constructor(img) {
        this.img = img;
		this.x = 0;
        this.side = 100;
		this.y = height - this.side;
        this.vy = 0;
        this.gravity = 2;
    }

    draw() {
        noFill();
        rect(this.x, this.y, this.side, this.side);
        image(this.img, this.x, this.y, this.side, this.side);
    }

    jump() {
        if(this.y === height - this.side) {
            this.vy = -30;
        } 
    }

    update() {
        this.y += this.vy;
        this.vy += this.gravity; 
        this.y = constrain(this.y, height/2-this.side, height-this.side);
    }

    collision(exeggutor) {
        //
    }
}