class Preload extends Phaser.State {

	preload() {
		this.game.load.image('starfield', "assets/background.png");
		this.game.load.image('player', "assets/spaceship.png")
		this.game.load.image('bullet', "assets/bullet.png")
		this.game.load.image('enemyBullet', "assets/enemy_bullet.png")
		this.game.load.image('enemy', "assets/enemy_1.png")
	}

	create() {
		//NOTE: Change to GameTitle if required

		this.game.state.start("Main");
	}

}

export default Preload;
