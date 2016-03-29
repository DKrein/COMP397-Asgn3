/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- object for the fuelCan

Revision:
1 - ajusted name of class
    
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var FuelCan = (function (_super) {
        __extends(FuelCan, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function FuelCan() {
            _super.call(this, "fuelCan");
            //this._speed.x = 5; //FuelCan speed
            this._reset(this._leftBounds);
            this.name = "fuelCan";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        FuelCan.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the ocean offscreen
        FuelCan.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        FuelCan.prototype.update = function () {
            // scroll the island 5 px per frame
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return FuelCan;
    }(objects.GameObject));
    objects.FuelCan = FuelCan;
})(objects || (objects = {}));

//# sourceMappingURL=fuelCan.js.map
