class Fly {

    loadAssets() {
        this.img = loadImage('img/green_fly.gif');
    }

    constructor() {
        this.health = 100;
        this.size = 30;
        this.posX = gameW;
        this.posY = Math.floor(Math.random() * (gameH - this.size));
        this.posStart = this.posY;
        this.swing = -1;
    }

    move() {
        this.posX--;
        this.posY = this.posY - this.swing;

        if ((this.posY - this.posStart) > 20 || (this.posY - this.posStart) < -20) {
            if (this.swing == 1) {
                this.swing = -1;
            } else {
                this.swing = 1;
            }
        }

        if (this.posX < 0) {
            this.posX = gameW;
        }
    }

    show() {
        this.move();
        image(this.img, this.posX, this.posY, this.size, this.size);
    }
}