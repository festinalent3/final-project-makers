import move from '../modules/moves';
import displayText from '../modules/displayText';
import Player from  '../objects/Player';
import Enemies from '../objects/Enemies';

import * as score from "../modules/score"
import * as life from "../modules/life"
import * as sound from "../modules/sound"
import * as background from "../modules/background"
import * as bullets from '../modules/bullets';
import * as reset from '../helpers/reset';

var player;
var cursors;
var playerBullets;
var enemyBullets;
var enemies;
var scoreText;
var enemyBullet;
var lifeText;
var levelText;
var stateText;
var soundText;
var numberOfBullets = 3;
var topBar;
var currentLevel = 1;
var laser;
var totalNoOfLevels = 7;

class Main extends Phaser.State {
	create() {

		// Set physics for the groups
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		background.create(this.game);
		player = new Player(this.game);
		player.enableShip();

		this.createDashboard();
		cursors = this.game.input.keyboard.createCursorKeys();

		// Player bullets
		playerBullets = bullets.generate(this.game, numberOfBullets*10, 'bullet');

		// Audio
		laser = this.game.add.audio('laser');

		enemies = new Enemies(this.game, 40);
		enemies.init();

		sound.init(this.game, soundText);

		// Enemy bullets
		enemyBullets = bullets.generate(this.game, numberOfBullets, 'enemyBullet');
	}

	update() {

		if(player.isAlive()) {
			move(player.ship, cursors, this.game);
			player.fire(playerBullets, laser);
    	enemies.fire(enemyBullets, player.ship);
			this.updateKills();
		}

		if (enemies.all.countLiving() === 0) {
			this.levelUp();
		}

		background.get().tilePosition.y += background.velocity();
		this.checkGameOver();

	}

	createDashboard() {
		topBar = this.game.add.tileSprite(0, 0, 800, 35, "topBar");
		lifeText  = displayText(this.game, 'Lives: 3', 20, 5, { font: '22px Arial', fill: '#FFF' });
		scoreText = displayText(this.game, 'Score: 0', 150, 5, { font: '22px Arial', fill: '#FFF' });
		levelText = displayText(this.game, 'Level: 1', 700, 5, { font: '22px Arial', fill: '#FFF' });
		soundText = displayText(this.game, 'Sound: ON', 550, 5, { font: '22px Arial', fill: '#FFF' });
	}

	checkGameOver() {
		if (life.get() === 0){
      enemies.all.removeAll();
			this.resetGame();
			this.game.state.start("GameOver");
		}
	}

	resetGame() {
		currentLevel = 1;
		numberOfBullets = 3
	}

	updateKills() {
		this.game.physics.arcade.overlap(playerBullets, enemies.all, score.update, null, this);
		scoreText.text = 'Score: ' + score.get();
		this.game.physics.arcade.overlap(enemyBullets, player.ship, life.reduce, life.count(lifeText), this);
	}

	levelUp() {
    this.gameWon();
    currentLevel += 1;
		levelText.text = 'Level: ' + currentLevel;
		enemies.update(currentLevel);
		background.update(currentLevel);
		bullets.update(enemyBullets, numberOfBullets += 1);
	}

  gameWon(){
    if(currentLevel === totalNoOfLevels) {
      this.resetGame();
      this.game.state.start("GameWon");
    }
  }

}

export default Main;
