/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- scene where the game runs

Revision:
1 - ajusted name of background class
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Car Count
            this._carCount = 6;
            // Instantiate Car array
            this._cars = new Array();
            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            // added island to the scene
            //this._island = new objects.Island();
            //this.addChild(this._island);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added cars to the scene
            for (var car = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
                this.addChild(this._cars[car]);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._background.update();
            //this._island.update();
            this._player.update();
            this._cars.forEach(function (car) {
                car.update();
                _this._collision.check(car);
            });
            //this._collision.check(this._island);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
