class Lv1 {

    constructor() {
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
        this.counter++;
        background(this.bg);
        this.frog.show();
        this.wasp.show();
        this.fly.show();
        if (this.counter == 250) {
            gameState = gameStates[2];
        }
    }
}