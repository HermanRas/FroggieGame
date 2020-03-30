class Game {
    constructor() {
        this.frog = new Frog();

    }

    loadAssets() {
        this.frog.loadAssets();
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
    }
}