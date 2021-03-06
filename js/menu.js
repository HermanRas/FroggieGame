class Menu {

    constructor() {
        this.menuItems = new Array(`New`, `Exit`);
    }

    loadAssets() {
        this.bg = loadImage('img/menu.png');
    }

    show() {
        // calculate spacing
        let buttonSize = gameH / this.menuItems.length;
        let paddingSize = (buttonSize / 10) * 2;

        // do background
        background(this.bg);
        // draw buttons
        for (let i = 0; i < this.menuItems.length; i++) {
            let height = buttonSize - paddingSize;
            let top = ((height * i)) + paddingSize;
            let width = gameW - paddingSize;

            fill(0, 192, 153, 95);
            rect(paddingSize, top, width - paddingSize, height - paddingSize);
            textSize(72);
            fill(0);
            textAlign(CENTER);
            text(this.menuItems[i], (width + paddingSize) / 2, top + height / 2);
        }
    }

    onClick(mouse) {
        // calculate spacing
        let buttonSize = gameH / this.menuItems.length;
        let paddingSize = (buttonSize / 10) * 2;
        const x = mouse.x;
        const y = mouse.y;

        // draw buttons
        for (let i = 0; i < this.menuItems.length; i++) {
            let height = buttonSize - paddingSize;
            let top = ((height * i)) + paddingSize;
            let width = gameW - paddingSize;

            if (x > paddingSize &&
                x < width &&
                y > top &&
                y < height + top
            ) {
                switch (this.menuItems[i]) {
                    case `New`:
                        gameState = gameStates[1];
                        break;
                    case `Exit`:
                        gameState = gameStates[gameStates.length - 1];
                        break;

                    default:
                        break;
                }

            }
        }
    }
}