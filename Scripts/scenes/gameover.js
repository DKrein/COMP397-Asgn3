/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- game over scene

Revision:
1 - changed the game from END to GAMEOVER
2 - added background image
3 - added score in the label
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// GAMEOVER SCENE
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        GameOver.prototype.start = function () {
            // Setup Background
            this._setupBackground("WhiteBackground");
            this._bgImage = new createjs.Bitmap(assets.getResult("GameOverBackground"));
            this.addChild(this._bgImage);
            //Add Menu Label
            this._endLabel = new objects.Label(play.score, "60px Consolas", "#000000", config.Screen.CENTER_X + 260, config.Screen.CENTER_Y - 18, true);
            this.addChild(this._endLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        GameOver.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        GameOver.prototype._restartButtonClick = function (event) {
            this._fadeOut(500, function () {
                // Switch to the INTRO Scene
                scene = config.Scene.MENU;
                changeScene();
            });
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));

//# sourceMappingURL=gameover.js.map
