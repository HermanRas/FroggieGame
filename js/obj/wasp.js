class Wasp {

    loadAssets() {
        this.img = loadImage('img/red_wasp.gif');
    }

    constructor() {
        this.health = 100;
        this.size = 30;
        this.posX = gameW + Math.floor(Math.random() * gameW);
        this.posY = Math.floor(Math.random() * (gameH - this.size));
    }


    checkWasStung(frogX, frogY, frogSize) {
        let left = frogX;
        let top = frogY;
        let bottom = frogY + frogSize;
        let right = frogX + frogSize;

        if (
            left < this.posX &&
            right > this.posX &&
            top < this.posY &&
            bottom > this.posY
        ) {
            return true;
        }
        return false;
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