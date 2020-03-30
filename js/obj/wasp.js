class Wasp {

    loadAssets() {
        this.img = loadImage('img/red_wasp.gif');
    }

    constructor() {
        this.health = 100;
        this.size = 30;
        this.posX = gameW;
        this.posY = Math.floor(Math.random() * (gameH - this.size));
    }

    move() {
        this.posX = this.posX - 2;
        if (this.posX < 0) {
            this.posX = gameW;
            this.posY = Math.floor(Math.random() * (gameH - this.size));
        }
    }

    show() {
        this.move();
        image(this.img, this.posX, this.posY, this.size, this.size);
    }
}