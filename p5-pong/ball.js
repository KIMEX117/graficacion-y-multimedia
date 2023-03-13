class Ball {
    constructor() {
        this.r = 10;
        this.reset();

        /* this.x = int(width / 2);
        this.y = int(height / 2);
        this.stepX = random([-1, 1]);
        this.stepY = random([-1, 1]); */
        //Math.random() > 0.5 ? 1 : -1;
        //round(random()) * 2 - 1;
    }

    draw() {
        ellipse(this.x, this.y, this.r * 2);
    }

    move() {
        this.x += this.stepX;
        this.y += this.stepY;
    }
    edge() {
        if(this.y - this.r <= 0 || this.y + this.r >= height)
            this.stepY *= -1;
        
        if(this.x - this.r <= 0 || this.x + this.r >= width)
            this.reset();
    }
    collideWithPlayer(player1_X, player1_Y, player2_X, player2_Y) {
        if(((this.x >= player1_X && this.x <= player1_X+20) && (this.y>=player1_Y&&this.y<=player1_Y+120)) || ((this.x <= player2_X && this.x >= player2_X-20) && (this.y>=player2_Y&&this.y<=player2_Y+120))) {
            this.stepX *= -1;
        }
    }

    reset() {
        this.x = int(width / 2);
        this.y = int(height / 2);
        this.stepX = random([-3, 3]);
        this.stepY = random([-3, 3]);
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}