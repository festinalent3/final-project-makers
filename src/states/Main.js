import move from '../modules/moves';
import fire from '../modules/fire';
import * as handler from '../modules/handlers';
import * as set from "../modules/gameProperties";
import createEnemies from '../modules/createEnemies';

var spacefield;
var backgroundVelocity;
var player;
var cursors;
var bullets;
var fireButton;
var enemies;
var scoreText;

class Main extends Phaser.State {

	create() {
    // Set physics for the groups
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

		spacefield = this.game.add.tileSprite(0,0,800,600,"starfield");
    backgroundVelocity = 5;
    player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'player');

		scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });

    // Set physics for spaceship
    this.game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    cursors = this.game.input.keyboard.createCursorKeys();

    bullets = this.game.add.group();

    set.bulletsProperties(bullets);

    fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    enemies = this.game.add.group();
    enemies.enableBody = true;

    createEnemies(this.game,enemies);
  }

  update() {
		move(player, cursors, fireButton, this.game);
		fire(bullets, player, fireButton, this.game);
  	this.game.physics.arcade.overlap(bullets, enemies, handler.collision, handler.calculateScore(scoreText), this);
    spacefield.tilePosition.y += backgroundVelocity;

	}

}

export default Main;
