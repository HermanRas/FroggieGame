class Game {
    constructor() {
        //Game Framework
        this.gravity = 1;
        this.friction = 0.9;
        this.score = 0
        this.frogHealth = 100;

        //Game Actions
        this.UP = 0;
        this.DOWN = 0;
        this.LEFT = 0;
        this.RIGHT = 0;
        this.JUMP = 0;
        this.ACTION = 0;
        this.gameSoundTrack;
    }

    preload() {
        this.gameSoundTrack = loadSound('sound/sfx_soundTrack.ogg');
    }

    playSound() {
        if (this.gameSoundTrack.isPlaying() === false) {
            this.gameSoundTrack.play();
        }
    }

    checkMove() {
        // update Actions
        if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
            this.UP = -1;
        }
        if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
            this.DOWN = 1;
        }
        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
            this.LEFT = -1;
        }
        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
            this.RIGHT = 1;
        }
        if (keyIsDown(32)) {
            this.JUMP = -5;
        }
        if (keyIsDown(69) || keyIsDown(13)) {
            this.ACTION = 1;
        }
    }


    updateHud() {
        // Zero out game actions
        this.UP = 0;
        this.DOWN = 0;
        this.LEFT = 0;
        this.RIGHT = 0;
        this.JUMP = 0;
        this.ACTION = 0;

        // update Score Board
        fill(252, 249, 20);
        stroke(0);
        textAlign(LEFT);
        textSize(24);
        text(this.score, 10, 24);
    }

    renderGameState(gameState) {
        switch (gameState) {
            case `Menu`: {
                menu.show();
                // this.playSound();
            }
                break;

            case `Lv1`: {
                lv1.show();
                game.updateHud();
                this.gameSoundTrack.stop();
            }
                break;

            case `Lv2`: {
                lv2.show();
                game.updateHud();
                this.gameSoundTrack.stop();
            }
                break;

            case `Lv3`: {
                lv3.show();
                game.updateHud();
                this.gameSoundTrack.stop();
            }
                break;

            case `End`: {
                end.show();
                // this.playSound();
            }
                break;

            default: {
            }
                break;
        }

    }
}