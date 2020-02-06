class Border {
    constructor(x, y, sizeX, sizeY) {
        this.lu = createVector(x, y)                                        //left upper corner
        this.ld = createVector(this.lu.x, this.lu.y + sizeY)                //left down corner
        this.ru = createVector(this.lu.x + sizeX, this.lu.y)                //right upper corner
        this.rd = createVector(this.lu.x + sizeX, this.lu.y + sizeY)        //right down corner
    }
    show() {
        line(this.lu.x, this.lu.y, this.ld.x, this.ld.y)                    //draw all the lines basically
        line(this.ld.x, this.ld.y, this.rd.x, this.rd.y)
        line(this.rd.x, this.rd.y, this.ru.x, this.ru.y)
        line(this.lu.x, this.lu.y, this.ru.x, this.ru.y)
    }
    update(other) {
        let move = createVector(-(mouseX - width / 2), -(mouseY - height / 2)) //same shit as in food
        move.normalize()
        move = p5.Vector.mult(move, 1000 / sqrt(other.score))
        this.lu.add(move)
        this.ld.add(move)
        this.rd.add(move)
        this.ru.add(move)
    }
}