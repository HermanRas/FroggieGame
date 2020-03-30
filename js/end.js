class End {

    constructor() {
    }

    loadAssets() {

    }

    show() {
        background(0);
        textAlign(CENTER);

        // set death message 
        textSize(72);
        fill(255, 255, 255);
        text(`You Died !`, gameW / 2, gameH / 2);

        textSize(32);
        fill(252, 57, 3);
        text(`Your Total Score:` + game.score, gameW / 2, (gameH / 4) * 3);
    }
}