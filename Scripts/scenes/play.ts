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
        private _clouds: objects.Cloud[];
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 3;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._background.update();
            this._island.update();
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._island);
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}