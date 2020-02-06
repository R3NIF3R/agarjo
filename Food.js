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
        let move = createVector(-(mouseX - width / 2), -(mouseY - height / 2))         //creating new vector pointing from
        move.normalize()                                                               //the middle of the screen towards
        move = p5.Vector.mult(move, 1000 / sqrt(other.score))                          //the mouse but it's length is set
        this.pos.add(move)                                                             //to 1 and then the food is moved by
    }                                                                                  //  -(that vector) that is in the 
    show() {                                                                           //opposite direction
        //   stroke(this.red + 50, this.green + 50, this.blue + 50);                   
        noStroke()
        strokeWeight(0.1 * this.r);
        fill(this.red, this.green, this.blue);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
    randomizePos() {
        this.pos = createVector(random(width), random(height))
    }
}