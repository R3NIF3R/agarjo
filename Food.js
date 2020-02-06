class Food {
    constructor(x, y, size, r, g, b) {
        this.pos = createVector(x, y)
        this.size = size
        this.red = r;
        this.green = g;
        this.blue = b;
        this.r = sqrt(size / PI);
    }
    update() {

    }
    show() {
        stroke(this.red + 50, this.green + 50, this.blue + 50);
        strokeWeight(0.1 * this.r);
        fill(this.red, this.green, this.blue);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

}