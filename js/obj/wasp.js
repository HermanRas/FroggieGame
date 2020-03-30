class Wasp {

    loadAssets() {
        this.img = loadImage('img/red_wasp.gif');
    }

    constructor() {
        this.health = 100;
        this.posX = 255;
        this.posY = 50;
        this.size = 30;
    }

    show() {
        image(this.img, this.posX, this.posY, this.size, this.size);
    }
}