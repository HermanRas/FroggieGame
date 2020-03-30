class Frog {

    loadAssets() {
        this.img = loadImage('img/froggy.gif');
    }

    constructor() {
        this.health = 100;
        this.posX = 0;
        this.posY = 280;
        this.size = 80;
    }

    show() {
        image(this.img, this.posX, this.posY, this.size, this.size);;
    }
}