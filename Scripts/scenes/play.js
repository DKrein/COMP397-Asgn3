/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- scene where the game runs

Revision:
1 - ajusted name of background class
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this.score = 0;
            this.lifes = 100;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Car Count
            this._carCount = 7;
            // Setup Background
            this._setupBackground("WhiteBackground");
            // Instantiate Car array
            this._cars = new Array();
            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            // added island to the scene
            this._fuelCan = new objects.FuelCan();
            this.addChild(this._fuelCan);
            //added cars to the scene
            for (var car = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
                this.addChild(this._cars[car]);
            }
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            //Add lives Label
            this._livesLabel = new objects.Label("Lives: 0", "60px Consolas", "#000000", 150, 20, true);
            this.addChild(this._livesLabel);
            //Add score Label
            this._scoreLabel = new objects.Label("Score: 0", "60px Consolas", "#000000", 750, 20, true);
            this.addChild(this._scoreLabel);
            this._playBackgroundSound();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        Play.prototype._playBackgroundSound = function () {
            this._bgSound = createjs.Sound.play("bgSound", { volume: 0.7 });
            this._bgSound.on("complete", this._playBackgroundSound, this);
        };
        Play.prototype._redrawInfo = function () {
            this._scoreLabel.text = "Score: " + this.score;
            this._livesLabel.text = "Lifes: " + Math.round(this.lifes);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            if (Math.round(this.lifes) <= 0) {
                this._gameOver();
            }
            this._background.update();
            this._fuelCan.update();
            this._player.update();
            this._cars.forEach(function (car) {
                car.update();
                _this._collision.check(car);
            });
            this._redrawInfo();
            this._collision.check(this._fuelCan);
        };
        Play.prototype._gameOver = function () {
            //FadeOut 
            //this._fadeOut(500, () => {
            // Switch to the GAMEOVER Scene
            this._bgSound = createjs.Sound.stop();
            scene = config.Scene.GAMEOVER;
            changeScene();
            //});
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
