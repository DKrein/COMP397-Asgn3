/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-29-2016
File description: 
- Player class, take care about the player information, position and movment

Revision:
1 - changed for vertical bounds, changed the axis which the player will move 
*/

module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        
        // PRIVATE INSTANCE VARIABLES
        private _upperBounds: number;
        private _lowerBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("avatar"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._upperBounds = this.height * 0.5;
            this._lowerBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 950;
        }

        // PRIVATE METHODS 
        private _checkBounds(): void {
            if (this.y < this._upperBounds) {
                this.y = this._upperBounds;
            }

            if (this.y > this._lowerBounds) {
                this.y = this._lowerBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
            
            /*
            var angle = Math.atan2(stage.mouseY,300)*-1;  
            angle = angle * (380/Math.PI); 
            var angle = Math.atan2(this.y - stage.mouseY,this.x - stage.mouseX) * 180 / Math.PI;
            this.rotation = angle;  */
        }
    }
}