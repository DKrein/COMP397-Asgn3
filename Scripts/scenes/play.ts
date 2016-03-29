/*
Author: Douglas Krein
Last Modified by: Douglas krein
Last Modified: 03-28-2016
File description: 
- scene where the game runs

Revision:
1 - ajusted name of background class
*/

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: objects.Background;
        private _island: objects.Island;
        private _cars: objects.Car[];
        private _carCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Car Count
            this._carCount = 6;
            
            // Instantiate Car array
            this._cars = new Array<objects.Car>();
                
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
            for(var car:number = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
               this.addChild(this._cars[car]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._background.update();
            //this._island.update();
           
            this._player.update();
           
            this._cars.forEach(car => {
                car.update();
                this._collision.check(car);
            });
            
            //this._collision.check(this._island);
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}