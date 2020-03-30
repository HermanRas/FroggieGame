// Setup Game Details 
const gameW = 700;
const gameH = 400;

// Setup Menu, Levels and End
let gameStates = new Array(`Menu`, `Lv1`, `Lv2`, `Lv3`, `End`);
let gameState;

// Load  Menu, Levels and End
const menu = new Menu();
const lv1 = new Lv1();
const lv2 = new Lv2();
const lv3 = new Lv3();
const end = new End();
const game = new Game();

function preload() {
    game.preload();
    lv1.preload();
    lv2.preload();
    lv3.preload();
}

function setup() {
    // Setup Game
    createCanvas(gameW, gameH);
    gameState = gameStates[0];
    // load Assets for Menu, Levels and end
    menu.loadAssets();
    lv1.loadAssets();
    lv2.loadAssets();
    lv3.loadAssets();
    end.loadAssets();
}


function mouseClicked(event) {
    if (gameState === 'Menu') {
        menu.onClick(event)
    }
}


function draw() {
    if (keyIsPressed === true) {
        game.checkMove();
    }
    background(220);
    game.renderGameState(gameState);
}