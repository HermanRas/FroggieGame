class Frog {

    loadAssets() {
        this.frog = loadImage('img/froggy.gif');
    }

    constructor() {
        this.health = 100;
        this.assetImg = this.frog;
    }


}