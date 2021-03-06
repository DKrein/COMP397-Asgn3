/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-29-2016
File description:
- background class, it take care about the endless background movment

Revision:
1 - size adjusted to the new screen and background image
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BACKGROUND CLASS ++++++++++++++++++++++++++++++++++++
    var Background = (function (_super) {
        __extends(Background, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Background() {
            _super.call(this, "road");
            this._speed.x = 5; //background speed
            this._reset(-1024);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Background.prototype._checkBounds = function (value) {
            // check to see if the top of the background 
            // is met the top of the scene
            if (this.x >= value) {
                this._reset(-1024);
            }
        };
        // reset the background offscreen
        Background.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Background.prototype.update = function () {
            // scroll the background 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(0);
        };
        return Background;
    }(objects.GameObject));
    objects.Background = Background;
})(objects || (objects = {}));

//# sourceMappingURL=background.js.map
