class Game {
    constructor() {
        this.gravity = 2;
        this.UP = 0;
        this.DOWN = 0;
        this.LEFT = 0;
        this.RIGHT = 0;
        this.JUMP = 0;
        this.ACTION = 0;
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

    renderGameState(gameState) {
        switch (gameState) {
            case `Menu`: {
                menu.show();
            }
                break;
            case `Lv1`: {
                lv1.show();
            }
                break;
            case `Lv2`: {
                lv2.show();
            }
                break;
            case `End`: {
                end.show();
            }
                break;

            default: {
            }
                break;
        }

        // Zero out game actions
        this.UP = 0;
        this.DOWN = 0;
        this.LEFT = 0;
        this.RIGHT = 0;
        this.JUMP = 0;
        this.ACTION = 0;
    }
}