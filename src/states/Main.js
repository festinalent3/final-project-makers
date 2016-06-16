import move from '../modules/moves';
import createMany from '../modules/createMany';
import align from '../modules/align';
import animate from '../modules/animate';
import update from '../modules/update';



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
var muteButton;
var lifeText;
var levelText;
var stateText;
var numberOfBullets = 3;
var enemiesArray = ["enemy_1", "enemy_2", "enemy_3", "enemy_4", "enemy_5", "enemy_6"];
var enemyIndex = 0;
var topBar;
var currentLevel = 1;
var laser;

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
		enemies = this.game.add.group();

		createMany(enemies, enemiesArray[enemyIndex], 40);
		align(enemies);
    animate(enemies, this.game);

		enemyBullets = this.game.add.group();
		set.bulletsProperties(enemyBullets, numberOfBullets, 'enemyBullet');

		fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		muteButton = this.game.input.keyboard.addKey(Phaser.Keyboard.M);
	}

	update() {

		if(player.alive) {
			move(player, cursors, this.game);
			fire.ship(bullets, player, this.game, fireButton, laser);
			if (enemies.countLiving() > 0) {
				// fire.enemy(enemyBullets, enemies, this.game, player);
			}
			else if (enemies.countLiving() === 0) {
				currentLevel += 1;
				levelText.text = 'Level: ' + currentLevel;
				// update(enemies, enemiesArray[enemyIndex += 1])

				update(enemies, enemiesArray[enemyIndex += 1]);
				//
				// var index = -1;
				// enemyIndex +=1;
				//
				// for(var y = 0; y < 4; y++) {
				// 	for(var x = 0; x < 10; x++) {
				// 		var child = enemies.getAt(index += 1)
				// 		child.reset(x*60, y*50)
				// 		child.loadTexture(enemiesArray[enemyIndex], 0);
				// 	}
				// }


				// enemies.forEach(reset, this);
				//
				// function reset(child) {
				//   // child.alive = true;
				//   // child.visible = true;
				// 	child.reset();
				//
				//   child.loadTexture(enemiesArray[enemyIndex += 1], 0);
				//   // debugger
				//   // child.key = enemiesArray[enemyIndex += 1]);
				//   // enemies.resetChild(child, enemiesArray[enemyIndex += 1]);
				// }
				//
				// enemies.removeAll();
				// createMany(enemies, enemiesArray[enemyIndex += 1], 40);
				// align(enemies);
				// animate(enemies, this.game);

				set.bulletsProperties(enemyBullets, numberOfBullets += 3, 'enemyBullet');
			}
			this.game.physics.arcade.overlap(bullets, enemies, handler.collision, null, this);
			scoreText.text = 'Score: ' + handler.getScore();
		}

    this.game.physics.arcade.overlap(enemyBullets, player, handler.killPlayer, handler.lifeScore(lifeText), this);
    if (handler.getLives() === 0){
      enemies.removeAll();
      currentLevel = 1;
      enemyIndex = 0;
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
