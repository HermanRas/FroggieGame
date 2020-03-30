class Frog {

    loadAssets() {
        this.img = loadImage('img/froggy.gif');
        this.lifeImg = new Array();
        this.lifeImg[0] = loadImage('img/life/VIDA_0.png');
        this.lifeImg[1] = loadImage('img/life/VIDA_1.png');
        this.lifeImg[2] = loadImage('img/life/VIDA_2.png');
        this.lifeImg[3] = loadImage('img/life/VIDA_3.png');
        this.lifeImg[4] = loadImage('img/life/VIDA_4.png');
        this.lifeImg[5] = loadImage('img/life/VIDA_5.png');
        this.lifeImg[6] = loadImage('img/life/VIDA_6.png');
        this.lifeImg[7] = loadImage('img/life/VIDA_7.png');
        this.lifeImg[8] = loadImage('img/life/VIDA_8.png');
        this.lifeImg[9] = loadImage('img/life/VIDA_9.png');
        this.lifeImg[10] = loadImage('img/life/VIDA_10.png');
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
        let lifeID = floor(this.health / 10);
        console.log(lifeID);

        image(this.lifeImg[lifeID], gameW - 110, 10, 100, 10);

    }
}