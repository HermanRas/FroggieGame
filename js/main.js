
// Setup Game Details 
const gameW = 700;
const gameH = 400;

// Setup Menu, Levels and End
let gameStates = new Array(`Menu`, `Lv1`, `Lv2`, `End`);
let gameState;

// Load  Menu, Levels and End
const menu = new Menu();
const lv1 = new Lv1();
const lv2 = new Lv2();
const end = new End();
const game = new Game();

function setup() {
    // Setup Game
    createCanvas(gameW, gameH);
    gameState = gameStates[0];
    // load Assets for Menu, Levels and end
    menu.loadAssets();
    lv1.loadAssets();
    lv2.loadAssets();
}

function mouseClicked(event) {
    menu.onClick(event)
}


function draw() {
    background(220);
    game.renderGameState(gameState);
}