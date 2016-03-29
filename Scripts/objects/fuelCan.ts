/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description: 
- object for the fuelCan

Revision:
1 - ajusted name of class
    
*/

module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class FuelCan extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
           super("fuelCan");
            
           //this._speed.x = 5; //FuelCan speed
           this._reset(this._leftBounds);
           this.name = "fuelCan";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // is outside the viewport         
            if(this.x >= value) {
                this._reset(this._leftBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the island 5 px per frame
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}