class Lv1 {

    constructor() {
        this.mapBottom = 100;
        this.counter = 1;
        this.frog = new Frog();
        this.wasp = new Wasp();
        this.fly = new Fly();
    }

    loadAssets() {
        this.bg = loadImage('img/lv1_bg.png');
        this.frog.loadAssets();
        this.wasp.loadAssets();
        this.fly.loadAssets();
    }

    show() {
        background(this.bg);
        this.frog.show();
        this.wasp.show();
        this.fly.show();
    }

    endLevel() {
        gameState = gameStates[gameStates.length - 1];
    };

    nextLevel() {
        gameState = gameStates[2];
    }

}