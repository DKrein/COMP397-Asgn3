/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description: 
- keep configurations to make the game work

Revision:
1 - added instructions static var and changed the screen size
2 - changed the name from END to GAMEOVER
*/

module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTIONS: number = 1;
        public static PLAY: number = 2;
        public static GAMEOVER: number = 3;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 1024;
        public static HEIGHT: number = 768;
        public static CENTER_X: number = 512;
        public static CENTER_Y: number = 384;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}