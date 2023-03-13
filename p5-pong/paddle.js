class Paddle {
    constructor (isLeft) {
        this.w = 20;
        this.h = 120;
        this.y = int(height / 2);
        this.step = 0;
        if(isLeft) {
            this.x = 100
        } else {
            this.x = width - this.w - 100;
        }
    }

    draw() {
        rect(this.x, this.y, this.w, this.h);
    }

    move(dir) {
        this.step = dir;
    }

    update() {
        this.y += this.step;
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}