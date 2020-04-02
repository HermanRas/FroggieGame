class PlayerSprite {

    constructor(animationJump, animationEat) {
        this.animationJump = animationJump;
        this.animationEat = animationEat;
        this.frameIndex = 0;
    }

    show(posX, posY, size) {
        let fIndex = floor(this.frameIndex) % this.animationJump.length;
        image(this.animationJump[fIndex], posX, posY, size, size);
    }

    update(speed) {
        this.frameIndex += speed;
    }

}