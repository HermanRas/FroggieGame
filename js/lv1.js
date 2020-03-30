class Lv1 {

    constructor() {
        this.counter = 1;
    }

    loadAssets() {
        this.bg = loadImage('img/lv1_bg.png');
    }

    show() {
        this.counter++;
        background(this.bg);
        textAlign(CENTER);
        fill(0)
        text(`Lv1`, gameW / 2, gameH / 2);
        if (this.counter == 250) {
            gameState = gameStates[2];
        }
    }
}