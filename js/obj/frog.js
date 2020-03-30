class Frog {

    loadAssets() {
        this.img = loadImage('img/froggy.gif');
    }

    constructor() {
        this.health = 100;
        this.size = 80;
        this.posX = 0;
        this.posY = gameH;
        this.speed = 0;
    }

    move() {

        //Jump
        this.speed = 0;
        if (game.JUMP != 0) {
            this.speed = this.speed + game.JUMP;
        };
        this.posY = this.posY + this.speed + game.gravity;
        if (this.posY > gameH - lv1.mapBottom) {
            this.posY = gameH - lv1.mapBottom;
        }

        //MOVE left and Right
        this.posX = this.posX + game.LEFT + game.RIGHT;
        //Colusion right screen edge
        if (this.posX > gameW - this.size) {
            this.posX = gameW - this.size;
        }
        if (this.posX < 0) {
            this.posX = 0;
        }
    }

    show() {
        this.move();
        image(this.img, this.posX, this.posY, this.size, this.size);
    }
}