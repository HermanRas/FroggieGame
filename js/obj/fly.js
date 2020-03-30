class Fly {

    loadAssets() {
        this.img = loadImage('img/green_fly.gif');
    }

    constructor() {
        this.health = 100;
        this.posX = 400;
        this.posY = 150;
        this.size = 30;
    }

    show() {
        image(this.img, this.posX, this.posY, this.size, this.size);
    }
}