class Lv1 {

    constructor() {
        this.counter = 1;
    }

    show() {
        this.counter++;
        background(0, 255, 0);;
        textAlign(CENTER);
        fill(0)
        text(`Lv1`, gameW / 2, gameH / 2);
        if (this.counter == 250) {
            gameState = gameStates[2];
        }
    }
}