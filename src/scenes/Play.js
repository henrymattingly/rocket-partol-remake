class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('starfield','assets/starfield.png');
        //this.load.inage('rocket','assets/rocket.png');
    }

    create(){
        this.starfield = this.add.tileSprite(0,0,640,480,'starfield').setOrigin(0,0);
        //green UI background
        this.add.rectangle(0, 
            borderUISize + boarderPadding, 
            game.config.width, 
            borderUISize*2,
            0X00FF00,).setOrigin(0,0);

         /*   
        this.P1Rocket = new Rocket(
            this, 
            game.confi.width/2,
            game.config.height - borderUISize - boarderPadding,
            'rocket',)
            */

        //white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
    }

    update() {
        this.starfield.tilePositionX -= 2;
    }
}