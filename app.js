let player
let border
let foods = []
let amount = 100     //amount of food generated at once
function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(60);
    player = new Player(
        width / 2,
        height / 2,
        10000,              //mass / score whatever rly
        30,                 //red value
        200,                //green value
        40                  //blue value
    );
    for (let i = 0; i < amount; i++) {
        foods[i] = new Food(
            random(-width + 5, 2 * width - 5),
            random(-height + 5, 2 * height - 5),
            1000,           //mass / score whatever rly
            100,            //red value
            10,             //green value
            30              //blue value
        );
    }
    border = new Border(-width, -height, 3 * width, 3 * height)
    background(0);
    print(player);
}
function draw() {
    background(0)
    //scale(2 + 1 / (player.score / 1000))
    //all shit regarding drawing food
    for (let i = 0; i < foods.length; i++) {
        foods[i].update(player)
        foods[i].show()
    }
    //all shit regarding drawing player
    push()
    for (let i = 0; i < foods.length; i++) {
        player.update(foods[i], border);
    }
    player.show();
    pop()
    textSize(40)
    stroke(255)
    fill(255)
    text(player.score, width - 200, 40)         //displaying score
    text(player.r, width - 200, 80)             //displaying radius (debugging purposes)
    border.update(player)
    border.show()
}