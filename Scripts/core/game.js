/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- Here is the entry point of my game, where the magic starts

Revision:
1 - added the instructions case for changing the scene
2 - added some new images for avatar, enemy and InstructionButton
3 - added white and black background to the fadeIn and fadeOut
4 - changed the name from END to GAMEOVER
*/
/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
//player
var player;
// Game Scenes
var menu;
var instructions;
var play;
var gameOver;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "BlackBackground", src: "../../Assets/images/BlackBackground.png" },
    { id: "WhiteBackground", src: "../../Assets/images/WhiteBackground.png" },
    { id: "MenuBackground", src: "../../Assets/images/menuBg.png" },
    { id: "GameOverBackground", src: "../../Assets/images/gameOverBg.png" },
    { id: "InstructionsBackground", src: "../../Assets/images/instructionsBg.png" },
    { id: "island", src: "../../Assets/images/island.png" },
    { id: "avatar", src: "../../Assets/images/avatar.png" },
    { id: "enemy1", src: "../../Assets/images/enemy1.png" },
    { id: "enemy2", src: "../../Assets/images/enemy2.png" },
    { id: "enemy3", src: "../../Assets/images/enemy3.png" },
    { id: "enemy4", src: "../../Assets/images/enemy4.png" },
    { id: "road", src: "../../Assets/images/road.png" },
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the INSTRUCTION scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.GAMEOVER:
            // show the GAMEOVER scene
            stage.removeAllChildren();
            gameOver = new scenes.GameOver();
            currentScene = gameOver;
            console.log("Starting GAMEOVER Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;

//# sourceMappingURL=game.js.map
