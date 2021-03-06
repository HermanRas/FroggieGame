class Lv1 {

    constructor() {
        this.mapBottom = 100;
        this.lv1_sound;
        // frog
        this.frog = new Frog();
        // star
        this.star = new Star();
        //wasps
        this.waspCount = 3;
        this.wasps = new Array();
        for (let i = 0; i < this.waspCount; i++) {
            this.wasps[i] = new Wasp();
        }
        //flies
        this.flyCount = 10;
        this.flies = new Array();
        for (let i = 0; i < this.flyCount; i++) {
            this.flies[i] = new Fly();
        }
    }

    preload() {
        // load level sound
        this.lv1_sound = loadSound('sound/sfx_lv1.ogg');
        // load star sound
        this.star.preload();
        // load flies sound
        for (let i = 0; i < this.flies.length; i++) {
            this.flies[i].preload();
        }
        // load wasp sound
        for (let i = 0; i < this.wasps.length; i++) {
            this.wasps[i].preload();
        }
    }

    playSound() {
        if (this.lv1_sound.isPlaying() === false) {
            this.lv1_sound.play();
        }
    }

    loadAssets() {
        // load Level Image
        this.bg = loadImage('img/lv1_bg.png');
        // load frog Image
        this.frog.loadAssets();
        // load star Image
        this.star.loadAssets();
        // load wasp Image
        for (let i = 0; i < this.wasps.length; i++) {
            this.wasps[i].loadAssets();
        }
        // load fly Image
        for (let i = 0; i < this.flies.length; i++) {
            this.flies[i].loadAssets();
        }
    }

    levelUpdate() {
        // start playing level sound
        this.playSound();

        // update frog life from wasps
        for (let i = 0; i < this.wasps.length; i++) {
            let stung = this.wasps[i].checkWasStung(this.frog.posX, this.frog.posY, this.frog.size, this.frog.jump);
            if (stung) {
                this.wasps.splice(i, 1);
                game.frogHealth = game.frogHealth - 10;
                this.frog.health = game.frogHealth;
                this.frog.eating = true;
                this.frog.show();
            } else {
                this.wasps[i].show();
                this.frog.eating = false;
            }
        }

        // update flies getting eaten 
        for (let i = 0; i < this.flies.length; i++) {
            let eaten = this.flies[i].checkWasEaten(this.frog.posX, this.frog.posY, this.frog.size, this.frog.jump);
            if (eaten) {
                this.flies.splice(i, 1);
                this.frog.eating = true;
                this.frog.show();
            } else {
                this.flies[i].show();
                this.frog.eating = false;
            }
        }

        // update star getting pickup
        if (this.star.shown) {
            this.star.show();
        } else {
            let drop = random(0, 4550);
            if (drop > 4549) {
                this.star.shown = true;
            }
        }
        if (this.star.pickedUp === false) {
            let pickup = this.star.checkPickUp(this.frog.posX, this.frog.posY, this.frog.size, this.frog.jump);
            if (pickup) {
                this.frog.jump_Velocity = 60;
                this.star.posY = 2;
                this.star.posX = 30;
            }
        }

        // update level complete
        if (this.flies.length === 0) {
            gameState = gameStates[2];
            this.lv1_sound.stop();
        }
        if (this.frog.health === 0) {
            end.updateEndGame(this.frog.health);
            gameState = gameStates[gameStates.length - 1];
            this.lv1_sound.stop();
        }
    }

    show() {
        this.frog.health = game.frogHealth;
        background(this.bg);
        this.frog.show();
        this.levelUpdate();
    }

}