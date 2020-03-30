class Game {
    constructor() {
        this.gravity = 5;
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