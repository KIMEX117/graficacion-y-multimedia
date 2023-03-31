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
        //rect(this.x, this.y, this.side, this.side);
        ellipseMode(CORNER);
        ellipse(this.x, this.y, this.side, this.side);
        image(this.img, this.x, this.y, this.side, this.side);
    }

    jump() {
        if(this.y === height - this.side) {
            this.vy = -35;
        } 
    }

    update() {
        this.y += this.vy;
        this.vy += this.gravity; 
        //this.y = constrain(this.y, height/2-this.side, height-this.side);
        this.y = constrain(this.y, 0, height-this.side);
    }

    collision(exeggutor) {
        //return this.rectCollision(exeggutor);
        return this.circleCollision(exeggutor);
    }

    rectCollision(exeggutor) {
        const left = this.x;
        const right = this.x + this.side;
        const top = this.y;
        const bottom = this.y + this.side;

        const eLeft = exeggutor.x;
        const eRight = exeggutor.x + exeggutor.s;
        const eTop = exeggutor.y;
        const eBottom = exeggutor.y + exeggutor.s;

        return right >= eLeft && left <= eRight && top <= eBottom && bottom >= eTop;
    }

    circleCollision(exeggutor) {
        const x1 = this.x + this.side * 0.5;
        const y1 = this.y + this.side * 0.5;

        const x2 = exeggutor.x + exeggutor.s * 0.5;
        const y2 = exeggutor.y + exeggutor.s * 0.5;

        return this.side * 0.5 + exeggutor.s * 0.5 >= this.distance(x1, y1, x2, y2);
    }

    distance(x1, y1, x2, y2) {
        let dx = abs(x2 -x1);
        let dy = abs(y2 - y1);
        
        return sqrt(pow(dx, 2) + pow(dy, 2));
    }
}