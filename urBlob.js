class Blob {
    constructor(x, y, score, r, g, b) {
        this.x = x;
        this.y = y;
        this.r = sqrt(score / PI);
        this.red = r;
        this.green = g;
        this.blue = b;
    }
    update() {
        translate(width / 2, height / 2);

    }
    show() {
        stroke(this.red + 50, this.green + 50, this.blue + 50);
        strokeWeight(0.1 * this.r);
        fill(this.red, this.green, this.blue);
        ellipse(this.x, this.y, this.r * 2);
    }

}