class Paddle {
    constructor (isLeft) {
        this.w = 20;
        this.h = 120;
        this.y = int(height / 2);
        this.step = 0;
        if(isLeft) {
            this.x = 0
        } else {
            this.x = width - this.w;
        }

        /* const p1 = {
            x: 25,
            y: 20,
            w: 25,
            h: 120,
            step: 2,
            move: function() {
                if(this.y + this.h >= height)
                this.step = -2;
                else if(this.y <= 0)
                this.step = 2;
                this.y = this.y + this.step;
            }
        } */
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
}