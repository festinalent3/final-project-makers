class Preload extends Phaser.State {

	preload() {
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('ground', 'assets/platform.png');
		this.game.load.image('star', 'assets/star.png');
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);		
	}

	create() {
		//NOTE: Change to GameTitle if required

		this.game.state.start("Main");
	}

}

export default Preload;