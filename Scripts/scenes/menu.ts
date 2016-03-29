/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description: 
- menu scene, first UI shown to the user

Revision:
1 - added button for the instructions
2 - added the background image to the menu scene
3 - added the fadeIn and fadeOut function
*/

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _bgImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._bgImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._bgImage);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
            
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionsButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
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
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            //FadeOut 
            this._fadeOut(500, () => {
                // Switch to the PLAY Scene
                scene = config.Scene.PLAY;
                changeScene();
            });
        }
        
        // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            //FadeOut 
            this._fadeOut(500, () => {
                // Switch to the INSTRUCTIONS Scene
                scene = config.Scene.INSTRUCTIONS;
                changeScene();
            });
        }


    }
}