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

// GAMEOVER SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _bgImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
             
            // Setup Background
            this._setupBackground("WhiteBackground");
            
            this._bgImage = new createjs.Bitmap(assets.getResult("GameOverBackground"));
            this.addChild(this._bgImage);
            
            //Add Menu Label
            this._endLabel = new objects.Label(
                ""+play.score, "60px Consolas",
                "#000000",
                config.Screen.CENTER_X + 260, config.Screen.CENTER_Y - 18, true);
            this.addChild(this._endLabel);
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            this._fadeOut(500, () => {
                // Switch to the INTRO Scene
                scene = config.Scene.MENU;
                changeScene();
            });
        }
    }
}