class Fly {

    loadAssets() {
        this.img = loadImage('img/green_fly.gif');
    }

    constructor() {
        this.health = 100;
        this.size = 30;
        this.posX = gameW + Math.floor(Math.random() * gameW);
        this.posY = Math.floor(Math.random() * (gameH - this.size));
        this.posStart = this.posY;
        this.swing = Math.floor(Math.random() * 2) - 2;
        this.eatBugSound;
    }

    preload() {
        this.eatBugSound = loadSound('sound/sfx_eatFly.ogg');
    }

    playSound() {
        if (this.eatBugSound.isPlaying() === false) {
            this.eatBugSound.play();
        }
    }

    checkWasEaten(frogX, frogY, frogSize) {
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
            game.score++;
            this.playSound();
            return true;
        }
        return false;
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
            this.posY = Math.floor(Math.random() * (gameH - this.size));
        }
    }

    show() {
        this.move();
        image(this.img, this.posX, this.posY, this.size, this.size);
    }
}