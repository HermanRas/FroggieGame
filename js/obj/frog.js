class Frog {

    loadAssets() {
        this.spriteSheetR = loadImage('img/PlayerSpriteR.png');
        this.spriteSheetL = loadImage('img/PlayerSpriteL.png');
        this.spriteData = loadJSON('img/PlayerSprite.json');
        // this.img = loadImage('img/froggy.gif');
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

        // Sprite
        this.animationJumpL = [];
        this.animationEatL = [];
        this.animationJumpR = [];
        this.animationEatR = [];
        this.frameTrack = 0;
        this.spriteLoaded = 0;
    }

    constructor() {
        // Frog
        this.health = 100;
        this.size = 80;
        this.speed = 0.5;
        this.posX = 0;
        this.posY = gameH;
        this.posX_Velocity = 0;
        this.posY_Velocity = 0;
        this.jump = false;
        this.eating = false
        this.jump_Velocity = 40;
    }

    move() {

        //Jump
        if (game.JUMP != 0 && this.jump == false) {
            this.posY_Velocity -= this.jump_Velocity;
            this.jump = true;
        };

        //Move Left
        if (game.LEFT != 0) {
            this.posX_Velocity -= this.speed;
        }

        //Move Right
        if (game.RIGHT != 0) {
            this.posX_Velocity += this.speed;
        }

        //gravity 
        this.posY_Velocity += game.gravity;

        //update Location
        this.posX += this.posX_Velocity;
        this.posY += this.posY_Velocity;

        //add friction (after all other forces applied)
        this.posX_Velocity *= game.friction;
        this.posY_Velocity *= game.friction;

        //Colusion right and left screen edge
        if (this.posX > gameW - this.size) {
            this.posX = gameW - this.size;
        }
        if (this.posX < 0) {
            this.posX = 0;
        }

        //Colusion top and bottom screen edge
        if (this.posY > gameH - this.size) {
            this.posY = gameH - this.size;
            this.jump = false;
        }
        if (this.posY < 0) {
            this.posY = 0;
        }
    }

    loadSprite() {
        if (this.spriteLoaded == 0) {
            for (let i = this.spriteData.frames.length - 1; i > 0; i--) {
                let pos = this.spriteData.frames[i].pos;
                let img = this.spriteSheetR.get(pos.x, pos.y, pos.w, pos.h);
                if (this.spriteData.frames[i].name === 'eat') {
                    this.animationEatR.push(img);
                }
                if (this.spriteData.frames[i].name === 'jump') {
                    this.animationJumpR.push(img);
                }
            }
            for (let i = 0; i < this.spriteData.frames.length; i++) {
                let pos = this.spriteData.frames[i].pos;
                let img = this.spriteSheetR.get(pos.x, pos.y, pos.w, pos.h);
                if (this.spriteData.frames[i].name === 'eat') {
                    this.animationEatR.push(img);
                }
                if (this.spriteData.frames[i].name === 'jump') {
                    this.animationJumpR.push(img);
                }
            }

            for (let i = 0; i < this.spriteData.frames.length; i++) {
                let pos = this.spriteData.frames[i].pos;
                let img = this.spriteSheetL.get(pos.x, pos.y, pos.w, pos.h);
                if (this.spriteData.frames[i].name === 'eat') {
                    this.animationEatL.push(img);
                }
                if (this.spriteData.frames[i].name === 'jump') {
                    this.animationJumpL.push(img);
                }
            }
            for (let i = this.spriteData.frames.length - 1; i > 0; i--) {
                let pos = this.spriteData.frames[i].pos;
                let img = this.spriteSheetL.get(pos.x, pos.y, pos.w, pos.h);
                if (this.spriteData.frames[i].name === 'eat') {
                    this.animationEatL.push(img);
                }
                if (this.spriteData.frames[i].name === 'jump') {
                    this.animationJumpL.push(img);
                }
            }

            this.sprite = new PlayerSprite(this.animationJumpR, this.animationEatR, this.animationJumpL, this.animationEatL);
            this.spriteLoaded = 1;
        }
    }

    show() {
        this.loadSprite();
        this.move();
        //froggie
        this.sprite.show(this.posX, this.posY, this.size, this.jump, this.eating);
        this.sprite.update(this.speed);

        //life background
        fill(255, 0, 0);
        rect(gameW - 110, 10, 100, 10);

        //life bar
        let lifeID = floor(this.health / 10);
        image(this.lifeImg[lifeID], gameW - 110, 10, 100, 10);
    }
}