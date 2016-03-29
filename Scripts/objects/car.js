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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CAR CLASS ++++++++++++++++++++++++++++++++++++
    var Car = (function (_super) {
        __extends(Car, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Car() {
            _super.call(this, "enemy" + (Math.floor(Math.random() * 4) + 1));
            this._possiblePositions = new Array();
            this._possiblePositions[0] = 130 - (this.height / 2);
            this._possiblePositions[1] = 264 - (this.height / 2);
            this._possiblePositions[2] = 402 - (this.height / 2);
            this._possiblePositions[3] = 525 - (this.height / 2);
            this._possiblePositions[4] = 646 - (this.height / 2);
            this._reset(this._leftBounds);
            this.name = "car";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Car.prototype._checkBounds = function (value) {
            // if the car is outside the viewport, reset the position         
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the car offscreen
        Car.prototype._reset = function (value) {
            this._speed.x = 5;
            this.x = value - ((this.width + 20) * (Math.floor(Math.random() * 5) + 1));
            this.y = this._possiblePositions[Math.floor(Math.random() * 5)];
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Car.prototype.update = function () {
            // scroll the car to the left of the screen
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds + this.width);
        };
        return Car;
    }(objects.GameObject));
    objects.Car = Car;
})(objects || (objects = {}));

//# sourceMappingURL=car.js.map
