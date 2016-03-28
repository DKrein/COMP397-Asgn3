/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-29-2016
File description:
- Player class, take care about the player information, position and movment

Revision:
1 - changed for vertical bounds, changed the axis which the player will move
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("avatar"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._upperBounds = this.height * 0.5;
            this._lowerBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 950;
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._upperBounds) {
                this.y = this._upperBounds;
            }
            if (this.y > this._lowerBounds) {
                this.y = this._lowerBounds;
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
