class Preload extends Phaser.State {

	preload() {

		this.game.add.tileSprite(0, 0, 800, 600, 'loading');
		// Images
		this.game.load.image('topBar', "assets/top.png");
		this.game.load.image('bck_1', "assets/background_1.png");
		this.game.load.image('bck_2', "assets/background_2.png");
		this.game.load.image('bck_3', "assets/background_3.png");
		this.game.load.image('bck_4', "assets/background_4.png");
		this.game.load.image('bck_5', "assets/background_5.png");
		this.game.load.image('bck_6', "assets/background_6.png");
		this.game.load.spritesheet('player', "assets/ship.png", 32, 52);
		this.game.load.image('bullet', "assets/bullet_2.png");
		this.game.load.image('enemyBullet', "assets/enemy_bullet.png");
		this.game.load.image('enemy_1', "assets/enemy_1.png");
		this.game.load.image('enemy_2', "assets/enemy_2.png");
		this.game.load.image('enemy_3', "assets/enemy_3.png");
		this.game.load.image('enemy_4', "assets/enemy_4.png");
		this.game.load.image('enemy_5', "assets/enemy_5.png");
		this.game.load.image('enemy_6', "assets/enemy_6.png");
		this.game.load.image('game_over', "assets/game_over.png");

		// Audio
		this.game.load.audio('laser', 'assets/laser.wav');
	}

	create() {
		//NOTE: Change to GameTitle if required

		this.game.state.start("Main");
	}

}

export default Preload;
