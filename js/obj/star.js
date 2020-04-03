class Star {

    loadAssets() {
        this.img = loadImage('img/star.gif');
        this.img2 = loadImage('img/Jump_Boost.png');
    }

    constructor() {
        this.shown = false;
        this.pickedUp = false;
        this.size = 30;
        this.posX = Math.floor(Math.random() * (gameW - this.size));
        this.posY = 0 - this.size;
        this.eatPickUpSound;
    }

    preload() {
        this.eatPickUpSound = loadSound('sound/sfx_star.ogg');
    }

    playSound() {
        if (this.eatPickUpSound.isPlaying() === false) {
            this.eatPickUpSound.play();
        }
    }

    checkPickUp(frogX, frogY, frogSize, frogJump) {

        let frogSizeY = frogSize;

        if (frogJump === false) {
            frogSizeY = frogSizeY / 2;
            frogY = frogY + frogSizeY;
        }

        // star
        // stroke(0, 0, 0, 0);
        // fill('rgba(255,0,0, 0.50)');
        // rect(this.posX, this.posY, this.size, this.size);

        if (frogX < this.posX + this.size &&
            frogX + frogSize > this.posX &&
            frogY < this.posY + this.size &&
            frogY + frogSizeY > this.posY) {
            this.playSound();
            this.pickedUp = true;
            return true;
        }
        return false;
    }

    move() {
        this.posY = this.posY + game.gravity;
        if (this.posY > gameH - this.size) {
            this.posY = gameH - this.size;
        }
    }

    show() {
        if (this.shown && !this.pickedUp) {
            this.move();
        }

        if (this.pickedUp) {
            image(this.img2, this.posX, this.posY, this.size, this.size);
        } else {
            image(this.img, this.posX, this.posY, this.size, this.size);
        }
    }
}