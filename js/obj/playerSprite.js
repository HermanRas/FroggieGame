class PlayerSprite {

    constructor(animationJumpR, animationEatR, animationJumpL, animationEatL) {
        this.anEatR = animationEatR;
        this.anJumpR = animationJumpR;
        this.anEatL = animationEatL;
        this.anJumpL = animationJumpL;
        this.animationJump = animationJumpR;
        this.animationEat = animationEatR;
        this.frameIndex = 0;
        this.eating = 0;
    }

    show(posX, posY, size, jump, eating) {

        if (eating === true) {
            this.eating = 20;
        } else {
            this.eating--;
        }

        if (this.eating < 0) {
            this.eating = 0;
        }

        if (game.RIGHT === 1) {

            this.animationJump = this.anJumpR;
            this.animationEat = this.anEatR;
        }
        if (game.LEFT === -1) {
            this.animationJump = this.anJumpL;
            this.animationEat = this.anEatL;
        }

        let fIndex = floor(this.frameIndex) % this.animationJump.length;
        if (jump === true && this.eating > 0) {
            image(this.animationEat[fIndex], posX, posY, size, size);
        }
        if (jump === false && this.eating > 0) {
            image(this.animationEat[0], posX, posY, size, size);
        }
        if (jump === true && this.eating == 0) {
            image(this.animationJump[fIndex], posX, posY, size, size);
        }
        if (jump === false && this.eating == 0) {
            image(this.animationJump[0], posX, posY, size, size);
        }

    }

    update(speed) {
        this.frameIndex += speed;
    }

}