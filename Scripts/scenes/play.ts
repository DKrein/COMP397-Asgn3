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
        
        score: number = 0;
        lifes: number = 100;
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _background: objects.Background;
        private _fuelCan: objects.FuelCan;
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
            this._carCount = 7;
            
            // Setup Background
            this._setupBackground("WhiteBackground");
            
            // Instantiate Car array
            this._cars = new Array<objects.Car>();
                
            // added background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);

            // added island to the scene
            this._fuelCan = new objects.FuelCan();
            this.addChild(this._fuelCan);

            //added cars to the scene
            for(var car:number = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
               this.addChild(this._cars[car]);
            }
            
             // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            //Add lives Label
            this._livesLabel = new objects.Label(
                "Lives: 0", "60px Consolas",
                "#000000",
                150, 
                20, 
                true);
            this.addChild(this._livesLabel);
            
            //Add score Label
            this._scoreLabel = new objects.Label(
                "Score: 0", "60px Consolas",
                "#000000",
                750, 
                20, 
                true);
            this.addChild(this._scoreLabel);    
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        protected _redrawInfo():void{
            this._scoreLabel.text = "Score: " + this.score;
            this._livesLabel.text = "Lifes: " + Math.round(this.lifes);
        }

        // PLAY Scene updates here
        public update(): void {
            
            if (Math.round(this.lifes) <= 0) {
                this._gameOver();
            }
            
            this._background.update();
            this._fuelCan.update();
           
            this._player.update();
           
            this._cars.forEach(car => {
                car.update();
                this._collision.check(car);
            });
            
            this._redrawInfo();
            
            this._collision.check(this._fuelCan);
            
        }
        
        protected _gameOver():void {
            //FadeOut 
            //this._fadeOut(500, () => {
                // Switch to the GAMEOVER Scene
                scene = config.Scene.GAMEOVER;
                changeScene();
            //});
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}