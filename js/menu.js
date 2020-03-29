class Menu {

    constructor() {
        this.menuItems = new Array(`New`, `Exit`);
    }

    show() {
        // calculate spacing
        let buttonSize = gameH / this.menuItems.length;
        let paddingSize = (buttonSize / 10) * 2;

        // draw buttons
        for (let i = 0; i < this.menuItems.length; i++) {
            let height = buttonSize - paddingSize;
            let top = ((height * i)) + paddingSize;
            let width = gameW - paddingSize;

            rect(paddingSize, top, width - paddingSize, height - paddingSize);
            textSize(72);
            fill(0, 102, 153);
            fill(0);
            textAlign(CENTER);
            text(this.menuItems[i], (width + paddingSize) / 2, top + height / 2);
            fill(0, 102, 153);
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

            // rect(paddingSize, top, width - paddingSize, height);

            if (x > paddingSize &&
                x < width - paddingSize &&
                y > top &&
                y < height + top
            ) {
                switch (this.menuItems[i]) {
                    case `New`:
                        gameState = gameStates[1];
                        console.log(gameStates[1])
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