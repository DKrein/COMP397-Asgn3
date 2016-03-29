/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- scene to show the instructions

Revision:
1 - added buttons for start and go back
2 - added fadeIn and fadeOut
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            this._bgImage = new createjs.Bitmap(assets.getResult("InstructionsBackground"));
            this.addChild(this._bgImage);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
            // add the Start button to the MENU scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // Setup Background
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // start Button click event handler
        Instructions.prototype._startButtonClick = function (event) {
            //FadeOut 
            this._fadeOut(500, function () {
                // Switch to the PLAY Scene
                scene = config.Scene.PLAY;
                changeScene();
            });
        };
        // back Button click event handler
        Instructions.prototype._backButtonClick = function (event) {
            //FadeOut 
            this._fadeOut(500, function () {
                // Switch to the PLAY Scene
                scene = config.Scene.MENU;
                changeScene();
            });
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
