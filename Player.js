class Player {
    constructor(x, y, score, r, g, b) {
        this.pos = createVector(x, y);
        this.score = score;
        this.r = sqrt(this.score / PI);
        this.red = r;
        this.green = g;
        this.blue = b;
    }
    update(other, another) {
        if (dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) < 0.9 * (this.r + other.r)) {
            this.score += other.size;
            other.randomizePos(another);
        }
        this.r = sqrt(this.score / PI);
    }
    show() {
        stroke(this.red + 50, this.green + 50, this.blue + 50);
        strokeWeight(0.1 * this.r);
        fill(this.red, this.green, this.blue);
        translate(this.pos.x, this.pos.y);
        ellipse(0, 0, this.r * 2);
    }

}