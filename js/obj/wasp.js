class Wasp {

    loadAssets() {
        this.img = loadImage('img/red_wasp.gif');
    }

    constructor() {
        this.health = 100;
        this.size = 30;
        this.posX = gameW + Math.floor(Math.random() * gameW);
        this.posY = Math.floor(Math.random() * (gameH - this.size));
        this.eatBugSound;
    }

    preload() {
        this.eatBugSound = loadSound('sound/sfx_eatWasp.ogg');
    }

    playSound() {
        if (this.eatBugSound.isPlaying() === false) {
            this.eatBugSound.play();
        }
    }

    checkWasStung(frogX, frogY, frogSize, frogJump) {

        let frogSizeY = frogSize;

        if (frogJump === false) {
            frogSizeY = frogSizeY / 2;
            frogY = frogY + frogSizeY;
        }

        // wasp
        // stroke(0, 0, 0, 0);
        // fill('rgba(255,0,0, 0.50)');
        // rect(this.posX, this.posY, this.size, this.size);

        if (frogX < this.posX + this.size &&
            frogX + frogSize > this.posX &&
            frogY < this.posY + this.size &&
            frogY + frogSizeY > this.posY) {
            this.playSound();
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