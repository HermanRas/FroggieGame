class Lv2 {

    constructor() {
        this.counter = 1;
    }

    loadAssets() {
        this.bg = loadImage('img/lv2_bg.png');
    }

    show() {
        this.counter++;
        background(this.bg);
        textAlign(CENTER);
        fill(0)
        text(`Lv2`, gameW / 2, gameH / 2);
        if (this.counter == 250) {
            gameState = gameStates[0];
        }
    }
}