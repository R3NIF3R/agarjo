class Blob {
    constructor(x, y, score, r, g, b) {
        this.pos = createVector(x, y)
        this.r = sqrt(score / PI);
        this.red = r;
        this.green = g;
        this.blue = b;
    }
    update() {
        translate(this.pos.x, this.pos.y);

    }
    show() {
        stroke(this.red + 50, this.green + 50, this.blue + 50);
        strokeWeight(0.1 * this.r);
        fill(this.red, this.green, this.blue);
        ellipse(0, 0, this.r * 2);
    }

}