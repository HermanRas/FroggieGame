class End {

    constructor() {
        let complete = 0;
    }

    loadAssets() {

    }

    updateEndGame(health) {
        this.complete = health;
    }

    show() {
        background(0);
        textAlign(CENTER);

        if (this.complete === 0) {
            // set death message 
            textSize(72);
            fill(255, 255, 255);
            text(`You died !`, gameW / 2, gameH / 2);
        } else {
            // set winning message 
            textSize(72);
            fill(255, 255, 255);
            text(`You won !`, gameW / 2, gameH / 2);
        }

        textSize(32);
        fill(252, 57, 3);
        text(`Your total score:` + game.score, gameW / 2, (gameH / 4) * 3);
    }
}