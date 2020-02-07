class Food {
    constructor(x, y, size, r, g, b) {
        this.pos = createVector(x, y)
        this.size = size
        this.red = r;
        this.green = g;
        this.blue = b;
        this.r = sqrt(size / PI);
    }
    update(other) {
        let move = createVector(-(mouseX - width / 2), -(mouseY - height / 2))
        move.limit(other.r*1.4)
        move.mult(3.5/(other.r*2.5))
        this.pos.add(move)
    }
    show() {
        //   stroke(this.red + 50, this.green + 50, this.blue + 50);
        noStroke()
        strokeWeight(0.1 * this.r);
        fill(this.red, this.green, this.blue);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
    randomizePos(other) {
        this.pos = createVector(
            random(other.lu.x + 5, other.rd.x - 5),
            random(other.lu.y + 5, other.rd.y - 5))
    }
}