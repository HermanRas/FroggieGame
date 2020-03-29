
// Setup Game Details 
const gameW = 1024;
const gameH = 700;

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
}

function mouseClicked(event) {
    menu.onClick(event)
}


function draw() {
    background(220);
    game.renderGameState(gameState);
}