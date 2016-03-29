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


// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton: objects.Button;
        private _backButton: objects.Button;
        private _bgImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._bgImage = new createjs.Bitmap(assets.getResult("InstructionsBackground"));
            this.addChild(this._bgImage);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X-240,
                config.Screen.CENTER_Y + 250, true);
            this.addChild(this._startButton);
            
             // add the Start button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X+140,
                config.Screen.CENTER_Y + 250, true);
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
        }

        // INTRO Scene updates here
        public update(): void {

        }        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // start Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
             //FadeOut 
            this._fadeOut(500, () => {
                // Switch to the PLAY Scene
                scene = config.Scene.PLAY;
                changeScene();
            });
        }
        
        // back Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
             //FadeOut 
            this._fadeOut(500, () => {
                // Switch to the PLAY Scene
                scene = config.Scene.MENU;
                changeScene();
            });
        }

    }
}