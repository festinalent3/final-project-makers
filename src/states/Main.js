import move from '../modules/moves';
import createMany from '../modules/createMany';
import align from '../modules/align';
import animate from '../modules/animate';
import update from '../modules/update';
import displayText from '../modules/displayText';

import * as fire from '../modules/fire';
import * as set from "../modules/gameProperties";
import * as score from "../modules/score"
import * as life from "../modules/life"
import * as sound from "../modules/sound"
import * as background from "../modules/background"


var spacefield;
var player;
var cursors;
var bullets;
var enemyBullets;
var enemies;
var scoreText;
var enemyBullet;
var lifeText;
var levelText;
var stateText;
var numberOfBullets = 3;
var levelIndex = 0;
var topBar;
var currentLevel = 1;
var laser;

class Main extends Phaser.State {
	create() {
		// Set physics for the groups
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		background.create(this.game);
		topBar = this.game.add.tileSprite(0, 0, 800, 35, "topBar");

		player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'player');

		// Game dashboard
		lifeText  = displayText(this.game, 'Lives: 3', 20, 5, { font: '22px Arial', fill: '#FFF' });
		scoreText = displayText(this.game, 'Score: 0', 150, 5, { font: '22px Arial', fill: '#FFF' });
		levelText = displayText(this.game, 'Level: 1', 700, 5, { font: '22px Arial', fill: '#FFF' });

		// Set physics for spaceship
		this.game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		player.animations.add('left', [0, 1, 2, 3, 4], 15, true);
		player.animations.add('right', [0, 1, 2, 3, 4], 15, true);

		cursors = this.game.input.keyboard.createCursorKeys();

		// Player bullets
		bullets = this.game.add.group();
		set.bulletsProperties(bullets, 30, 'bullet');

		// Audio
		laser = this.game.add.audio('laser');

		// Enemies
		enemies = this.game.add.group();
		// createMany(enemies, enemiesArray[levelIndex], 40);
		createMany(enemies, 'enemy_1', 40);
		align(enemies);
		animate(enemies, this.game);

		// Enemy bullets
		enemyBullets = this.game.add.group();
		set.bulletsProperties(enemyBullets, numberOfBullets, 'enemyBullet');
	}

	update() {

		sound.toggle(this.game);


		if(player.alive) {
			move(player, cursors, this.game);
			fire.ship(bullets, player, this.game, laser);
			fire.enemy(enemyBullets, enemies, this.game, player);
			this.game.physics.arcade.overlap(bullets, enemies, score.update, null, this);
			scoreText.text = 'Score: ' + score.get();
			this.game.physics.arcade.overlap(enemyBullets, player, life.reduce, life.count(lifeText), this);
		}

		if (enemies.countLiving() === 0) {
			currentLevel += 1;
			levelText.text = 'Level: ' + currentLevel;
			update(enemies, currentLevel);
			background.update(currentLevel);
			set.bulletsProperties(enemyBullets, numberOfBullets += 3, 'enemyBullet');
		}

		this.checkGameOver();

		background.get().tilePosition.y += background.velocity();

	}

	checkGameOver() {
		if (life.get() === 0){
			enemies.removeAll();
			currentLevel = 1;
			levelIndex = 0;
			numberOfBullets = 3
			this.game.state.start("GameOver");
		}
	}

}

export default Main;
