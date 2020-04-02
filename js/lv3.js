class Lv3 {

    constructor() {
        this.mapBottom = 100;
        this.frog = new Frog();

        //wasps
        this.waspCount = 7;
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
        this.lv3_sound;
    }

    preload() {
        this.lv3_sound = loadSound('sound/sfx_lv3.ogg');
        for (let i = 0; i < this.flies.length; i++) {
            this.flies[i].preload();
        }
        for (let i = 0; i < this.wasps.length; i++) {
            this.wasps[i].preload();
        }
    }

    playSound() {
        if (this.lv3_sound.isPlaying() === false) {
            this.lv3_sound.play();
        }
    }

    loadAssets() {
        this.bg = loadImage('img/lv3_bg.png');
        this.frog.loadAssets();
        for (let i = 0; i < this.wasps.length; i++) {
            this.wasps[i].loadAssets();
        }
        for (let i = 0; i < this.flies.length; i++) {
            this.flies[i].loadAssets();
        }
    }

    levelUpdate() {
        this.playSound();
        // update frog life from wasps
        for (let i = 0; i < this.wasps.length; i++) {
            let stung = this.wasps[i].checkWasStung(this.frog.posX, this.frog.posY, this.frog.size, this.frog.jump);
            if (stung) {
                this.wasps.splice(i, 1);
                game.frogHealth = game.frogHealth - 10;
                this.frog.health = game.frogHealth;
                this.frog.eating = true;
            } else {
                this.wasps[i].show();
                this.frog.eating = false;
            }
        }

        // update frogs getting eaten 
        for (let i = 0; i < this.flies.length; i++) {
            let eaten = this.flies[i].checkWasEaten(this.frog.posX, this.frog.posY, this.frog.size, this.frog.jump);
            if (eaten) {
                this.flies.splice(i, 1);
                this.frog.eating = true;
            } else {
                this.flies[i].show();
                this.frog.eating = false;
            }
        }

        // update level complete
        if (this.flies.length === 0) {
            gameState = gameStates[4];
            this.lv3_sound.stop();
        }
        if (this.frog.health === 0) {
            end.updateEndGame(this.frog.health);
            gameState = gameStates[gameStates.length - 1];
            this.lv3_sound.stop();
        }

    }

    show() {
        background(this.bg);
        this.frog.show();
        this.levelUpdate();
        this.frog.health = game.frogHealth;
    }

}