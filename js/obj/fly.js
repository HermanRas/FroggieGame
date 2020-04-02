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

    checkWasEaten(frogX, frogY, frogSize, frogJump) {

        let frogSizeY = frogSize;

        if (frogJump === false) {
            frogSizeY = frogSizeY / 2;
            frogY = frogY + frogSizeY;
        }

        // // frog
        // stroke(0, 0, 0, 0);
        // fill('rgba(0,255,0, 0.25)');
        // rect(frogX, frogY, frogSize, frogSizeY);

        // // fly
        // fill('rgba(0,0,255, 0.50)');
        // rect(this.posX, this.posY, this.size, this.size);

        if (frogX < this.posX + this.size &&
            frogX + frogSize > this.posX &&
            frogY < this.posY + this.size &&
            frogY + frogSizeY > this.posY) {

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