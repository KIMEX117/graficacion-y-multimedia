class Rapidash {
    constructor(img) {
        this.img = img;
		this.x = 0;
        this.side = 100;
		this.y = height - this.side;
    }

    draw() {
        image(this.img, this.x, this.y, this.side, this.side);
    }
}