/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description: 
- scene where the game runs

Revision:
1 - ajusted name of car class
2 - adjusted class to make cars drive from left to right in the proper lane
3 - added 5 possible places to spawn the cars
4 - random sprites when instanciating the class

*/

module objects {
    // CAR CLASS ++++++++++++++++++++++++++++++++++++
    export class Car extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
         private _possiblePositions : number[];
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
           super("enemy"+(Math.floor(Math.random() * 4)+1));
           
           this._possiblePositions = new Array<number>();
           this._possiblePositions[0] = 130 - (this.height/2);
           this._possiblePositions[1] = 264 - (this.height/2);
           this._possiblePositions[2] = 402 - (this.height/2);
           this._possiblePositions[3] = 525 - (this.height/2);
           this._possiblePositions[4] = 646 - (this.height/2);
                       
           this._reset(this._leftBounds);
           this.name = "car";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // if the car is outside the viewport, reset the position         
            if(this.x >= value) {
                this._reset(this._leftBounds);
            }
        }
        
        // reset the car offscreen
        protected _reset(value:number):void {
            this._speed.x = 5;            
            this.x = value - ((this.width+20) * (Math.floor(Math.random() * 5)+1));            
            this.y = this._possiblePositions[Math.floor(Math.random() * 5)];
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the car to the left of the screen
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds + this.width);
        }
    }
}