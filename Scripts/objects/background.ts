/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-29-2016
File description: 
- background class, it take care about the endless background movment

Revision:
1 - size adjusted to the new screen and background image 
*/

module objects {
    // BACKGROUND CLASS ++++++++++++++++++++++++++++++++++++
    export class Background extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
           super("background");
            
           this._speed.x = 5; //background speed
           this._reset(-1024);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the background 
            // is met the top of the scene
            
            if(this.x >= value) {
                this._reset(-1024);
            }
        }
        
        // reset the background offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the background 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        }
    }
}