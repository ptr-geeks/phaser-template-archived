class Scene1 extends Phaser.Scene {
    constructor () {
        // Pripravimo zacetno stanje scene
        console.log("IgraScene constructor");
        super();
        this.state = {
            
        };
    }

    preload () {
        // Tukaj vnaprej nalozimo slike, animacije in zvoke.
        console.log("IgraScene preload");

        this.load.image('ball', 'ball.png');
    }

    create () {
        // Tukaj ustvarimo elemente igre in jih postavimo v sceno.
        console.log("IgraScene create");

        this.state.ball = this.physics.add.image(400, 300, 'ball');
        this.state.ball.setCollideWorldBounds(true);
        this.state.ball.body.bounce.setTo(0.9, 0.9);
        this.state.ball.body.setVelocity(250, 300);
        
        this.pokliciMe();

    }

    update () {
        // Tukaj dodamo logiko, ki spreminjanja sceno.
        // Pomembno: Ta funkcija update() se poklice mnogokrat na sekundo.

    }

    pokliciMe() {
        // Ta funkcija je samo za primer
        console.log("Poklical si pokliciMe()");
    }
}

// Phaser nastavitve in zagon igre.
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            // Tu odkomentiraj debug: true za izrisovanje informacij o fiziki
            //debug: true
        }
    },    
    scene: [ Scene1 ]
};
const game = new Phaser.Game(config);