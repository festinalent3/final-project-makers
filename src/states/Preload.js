class Preload extends Phaser.State {

	preload() {
		this.game.load.image('topBar', "assets/top.png");
		this.game.load.image('starfield', "assets/background.png");
		this.game.load.image('player', "assets/spaceship.png")
		this.game.load.image('bullet', "assets/bullet.png")
		this.game.load.image('enemyBullet', "assets/enemy_bullet.png")
		this.game.load.image('enemy_1', "assets/enemy_1.png")
		this.game.load.image('enemy_2', "assets/enemy_2.png")
		this.game.load.image('enemy_3', "assets/enemy_3.png")
		this.game.load.image('enemy_4', "assets/enemy_4.png")
		this.game.load.image('enemy_5', "assets/enemy_5.png")
		this.game.load.image('enemy_6', "assets/enemy_6.png")
	}

	create() {
		//NOTE: Change to GameTitle if required

		this.game.state.start("Main");
	}

}

export default Preload;
