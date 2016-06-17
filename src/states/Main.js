import move from '../modules/moves';
import createMany from '../modules/createMany';
import align from '../modules/align';
import animate from '../modules/animate';
import update from '../modules/update';
import displayText from '../modules/displayText';

import * as fire from '../modules/fire';
import * as handler from '../modules/handlers';
import * as set from "../modules/gameProperties";
import * as score from "../modules/score"
import * as life from "../modules/life"



var spacefield;
var backgroundVelocity = 5;
var player;
var cursors;
var bullets;
var enemyBullets;
var enemies;
var scoreText;
var enemyBullet;
var fireButton;
var muteButton;
var lifeText;
var levelText;
var stateText;
var numberOfBullets = 3;
var enemiesArray = ["enemy_1", "enemy_2", "enemy_3", "enemy_4", "enemy_5", "enemy_6"];
var bckArray = ["bck_1", "bck_2", "bck_3", "bck_4", "bck_5", "bck_6"];
var levelIndex = 0;
var topBar;
var currentLevel = 1;
var laser;

class Main extends Phaser.State {
	create() {
		// Set physics for the groups
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		spacefield = this.game.add.tileSprite(0, 0, 800, 600, bckArray[levelIndex]);
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
		muteButton = this.game.input.keyboard.addKey(Phaser.Keyboard.M);

		// Enemies
		enemies = this.game.add.group();
		enemies.enableBody = true;
		createMany(enemies, enemiesArray[levelIndex], 40);
		align(enemies);
		animate(enemies, this.game);
		enemyBullets = this.game.add.group();
		set.bulletsProperties(enemyBullets, numberOfBullets, 'enemyBullet');
	}

	update() {

		if(player.alive) {
			move(player, cursors, this.game);
			fire.ship(bullets, player, this.game, fireButton, laser);
			if (enemies.countLiving() > 0) {
				fire.enemy(enemyBullets, enemies, this.game, player);
			}

			else if (enemies.countLiving() === 0) {
				currentLevel += 1;
				levelText.text = 'Level: ' + currentLevel;
				update(enemies, enemiesArray[levelIndex += 1]);
				set.background(spacefield, bckArray[levelIndex]);

				set.bulletsProperties(enemyBullets, numberOfBullets += 3, 'enemyBullet');
			}

			this.game.physics.arcade.overlap(bullets, enemies, score.update, null, this);
			scoreText.text = 'Score: ' + score.get();
		}

		this.game.physics.arcade.overlap(enemyBullets, player, life.reduce, life.count(lifeText), this);
		if (life.get() === 0){
			enemies.removeAll();
			currentLevel = 1;
			levelIndex = 0;
			numberOfBullets = 3
			this.game.state.start("GameOver");
		}



		spacefield.tilePosition.y += backgroundVelocity;

		// Mute if Key M is pressed
		if(muteButton.isDown) {
			handler.toggleSound(this.game);
		}

	}

}

export default Main;
