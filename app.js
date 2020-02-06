let player
let foods = []
let amount = 10     //amount of food generated at once
function setup() {
    createCanvas(innerWidth, innerHeight);
    player = new Blob(
        width / 2,
        height / 2,
        10000,              //mass / score whatever rly
        30,                 //red value
        200,                //green value
        40                  //blue value
    );
    for (let i = 0; i < amount; i++) {
        foods[i] = new Food(
            random(width),
            random(height),
            1000,           //mass / score whatever rly
            100,            //red value
            10,             //green value
            30              //blue value
        );
    }
    background(0);
    print(player);
}
function draw() {
    background(0)
    //all shit regarding drawing player
    push()
    player.update();
    player.show();
    pop()
    //all shit regarding drawing food
    for (let i = 0; i < amount; i++) {
        foods[i].update()
        foods[i].show()
    }
}