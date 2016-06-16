class Preload extends Phaser.State {

	preload() {

		// Images
		this.game.load.image('topBar', "assets/top.png");
		this.game.load.image('starfield', "assets/background_1.png");
		this.game.load.spritesheet('player', "assets/ship.png", 32, 52);
		this.game.load.image('bullet', "assets/bullet_2.png");
		this.game.load.image('enemyBullet', "assets/enemy_bullet.png");
		this.game.load.image('enemy_1', "assets/enemy_1.png");
		this.game.load.image('enemy_2', "assets/enemy_2.png");
		this.game.load.image('enemy_3', "assets/enemy_3.png");
		this.game.load.image('enemy_4', "assets/enemy_4.png");
		this.game.load.image('enemy_5', "assets/enemy_5.png");
		this.game.load.image('enemy_6', "assets/enemy_6.png");

		// Audio
		this.game.load.audio('laser', 'assets/laser.wav');
	}

	create() {
		//NOTE: Change to GameTitle if required

		this.game.state.start("Main");
	}

}

export default Preload;
