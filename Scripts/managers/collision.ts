/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description: 
- Here is where I control the colision with the sprites

Revision:
1 - changed the name of the objects to identify new sprites
2 - added the functionality to add score and remove life according the collision
*/

module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        
        // PRIVATE INSTANCE VARIABLES
        private _player: objects.Player;
        constructor(player:objects.Player) {
            this._player = player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        public check(object:objects.GameObject) {
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfHeight:number = this._player.height * 0.5;
            var objectHalfHeight:number = object.height * 0.5;
            var minimumDistance:number = playerHalfHeight + objectHalfHeight;
            
            startPoint.x = this._player.x;  
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if(this.distance(startPoint, endPoint) < minimumDistance) {
                
                // check if it's an fuelCan hit
                if(object.name === "fuelCan") {
                    console.log("fuelCan hit!");
                    object.reset();
                    play.score += 50;
                    if (play.lifes <= 90) {
                        play.lifes += 10;
                    }
                }
                
                // check if it's a car hit
                if(object.name === "car") {
                    console.log("car hit!");
                    play.lifes-=0.5;
                }
                
            }
        }
    }
}