class Lv2 {

    constructor() {
        this.counter = 1;
    }

    show() {
        this.counter++;
        background(255, 0, 0);;
        textAlign(CENTER);
        fill(0)
        text(`Lv2`, gameW / 2, gameH / 2);
        if (this.counter == 250) {
            gameState = gameStates[0];
        }
    }
}