class Lv1 {

    constructor() {
        this.mapBottom = 100;
        this.frog = new Frog();
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
        this.lv1_sound;
    }

    preload() {
        this.lv1_sound = loadSound('sound/sfx_lv1.ogg');
        for (let i = 0; i < this.flies.length; i++) {
            this.flies[i].preload();
        }
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
        this.bg = loadImage('img/lv1_bg.png');
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
            let stung = this.wasps[i].checkWasStung(this.frog.posX, this.frog.posY, this.frog.size);
            if (stung) {
                this.wasps.splice(i, 1);
                game.frogHealth = game.frogHealth - 10;
                this.frog.health = game.frogHealth;
            } else {
                this.wasps[i].show();
            }
        }

        // update frogs getting eaten 
        for (let i = 0; i < this.flies.length; i++) {
            let eaten = this.flies[i].checkWasEaten(this.frog.posX, this.frog.posY, this.frog.size);
            if (eaten) {
                this.flies.splice(i, 1);
            } else {
                this.flies[i].show();
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