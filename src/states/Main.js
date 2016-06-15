import move from '../modules/moves';
import * as fire from '../modules/fire';
import * as handler from '../modules/handlers';
import * as set from "../modules/gameProperties";
import createEnemies from '../modules/createEnemies';

var spacefield;
var backgroundVelocity;
var player;
var cursors;
var bullets;
var enemyBullets;
var enemies;
var scoreText;
var enemyBullet;
var fireButton;
var lifeText;
var levelText;
var stateText;
var numberOfBullets = 3;
var enemiesArray = ["enemy_1", "enemy_2", "enemy_3", "enemy_4", "enemy_5", "enemy_6"];
var enemyIndex = 0;
var topBar;
var currentLevel = 1;

class Main extends Phaser.State {

	create() {
		// Set physics for the groups
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		spacefield = this.game.add.tileSprite(0,0,800,600,"starfield");
		topBar = this.game.add.tileSprite(0,0,800,50,"topBar");

		backgroundVelocity = 5;
		player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'player');

		scoreText = this.game.add.text(150, 5, 'Score: 0', { font: '22px Arial', fill: '#FFF' });
		lifeText = this.game.add.text(20, 5, 'Lives: 3', { font: '22px Arial', fill: '#fff' });
		levelText = this.game.add.text(700, 5, 'Level: 1', { font: '22px Arial', fill: '#fff' });

		stateText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
		stateText.anchor.setTo(0.5, 0.5);
		stateText.visible = false;
		// Set physics for spaceship
		this.game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		cursors = this.game.input.keyboard.createCursorKeys();

		// Player bullets
		bullets = this.game.add.group();
		set.bulletsProperties(bullets, 30, 'bullet');

		enemies = this.game.add.group();
		enemies.enableBody = true;
		createEnemies(this.game, enemies, enemiesArray[enemyIndex]);

		// Enemy bullets
		enemyBullets = this.game.add.group();
		set.bulletsProperties(enemyBullets, numberOfBullets, 'enemyBullet');

		fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}

	update() {

		if(player.alive) {
			move(player, cursors, this.game);
			fire.ship(bullets, player, this.game, fireButton);
			if (enemies.countLiving() > 0) {
				fire.enemy(enemyBullets, enemies, this.game, player);
			}
			else if (enemies.countLiving() == 0) {
				currentLevel += 1;
				levelText.text = 'Level: ' + currentLevel;
				createEnemies(this.game, enemies, enemiesArray[enemyIndex += 1]);
				set.bulletsProperties(enemyBullets, numberOfBullets += 3, 'enemyBullet');
			}
			this.game.physics.arcade.overlap(enemyBullets, player, handler.killPlayer, handler.lifeScore(lifeText), this);
		}

		this.game.physics.arcade.overlap(bullets, enemies, handler.collision, null, this);
		scoreText.text = 'Score: ' + handler.getScore();

		spacefield.tilePosition.y += backgroundVelocity;

	}

}

export default Main;
