/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description:
- keep configurations to make the game work

Revision:
1 - added instructions static var and changed the screen size
*/
var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTIONS = 1;
        Scene.PLAY = 2;
        Scene.END = 3;
        return Scene;
    }());
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1024;
        Screen.HEIGHT = 768;
        Screen.CENTER_X = 512;
        Screen.CENTER_Y = 384;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));

//# sourceMappingURL=config.js.map
