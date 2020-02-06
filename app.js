let player
function setup() {
    createCanvas(innerWidth, innerHeight);
    player = new Blob(
        0,
        0,
        10000,
        30,
        200,
        40
    );
    background(0)
    print(player)
}
function draw() {
    background(0)
    player.update();
    player.show();
    stroke(255)
    strokeWeight(20)
    point(400, 400)
}