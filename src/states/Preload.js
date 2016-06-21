class Preload extends Phaser.State {

	preload() {

		this.game.add.tileSprite(0, 0, 800, 600, 'loading');
		this.loaderBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 210, 'loaderBg');
    this.loaderBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 210, 'loaderBar');
    this.loaderBg.anchor.setTo(0.5);
    this.loaderBar.anchor.setTo(0.5);

    this.game.load.setPreloadSprite(this.loaderBar);

		// Images
		this.game.load.spritesheet('player', "assets/ship.png", 32, 52);
		this.game.load.spritesheet('boom', "assets/explosion.png", 40, 41);
		this.game.load.image('topBar', "assets/top.png");
		this.game.load.image('bullet', "assets/bullet_2.png");
		this.game.load.image('bck_1', "assets/background_1.png");
		this.game.load.image('bck_2', "assets/background_2.png");
		this.game.load.image('bck_3', "assets/background_3.png");
		this.game.load.image('bck_4', "assets/background_4.png");
		this.game.load.image('bck_5', "assets/background_5.png");
		this.game.load.image('bck_6', "assets/background_6.png");
		this.game.load.image('enemy_1', "assets/enemy_1.png");
		this.game.load.image('enemy_2', "assets/enemy_2.png");
		this.game.load.image('enemy_3', "assets/enemy_3.png");
		this.game.load.image('enemy_4', "assets/enemy_4.png");
		this.game.load.image('enemy_5', "assets/enemy_5.png");
		this.game.load.image('enemy_6', "assets/enemy_6.png");
		this.game.load.image('enemy_7', "assets/enemy_7.png");
		this.game.load.image('enemyBullet', "assets/enemy_bullet.png");
		this.game.load.image('game_over', "assets/game_over.png");
		this.game.load.image('you_won', "assets/you_won.png");

		// Audio
		this.game.load.audio('laser', 'assets/laser.wav');
	}

	create() {
		//NOTE: Change to GameTitle if required

		this.game.state.start("Main");
	}

}

export default Preload;
