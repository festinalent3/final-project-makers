import Dude from '../objects/Dude';
import * as set from "../modules/gameProperties";
import move from '../modules/moves';
import makeMany from '../modules/makeMany';
import createEnemies from '../modules/createEnemies';

var spacefield;
var backgroundVelocity;
var player;
var cursors;
var bullets;
var bulletTime = 0;
var fireButton;
var enemies;

class Main extends Phaser.State {

	create() {
    // Set physics for the groups
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

		spacefield = this.game.add.tileSprite(0,0,800,600,"starfield");
    backgroundVelocity = 5;
    player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'player');

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
  	this.game.physics.arcade.overlap(bullets, enemies, collisionHandler, null, this);
    spacefield.tilePosition.y += backgroundVelocity;

		move(player, cursors, fireButton, this.game, fireBullet);

	  function fireBullet(game) {
	    if(game.time.now > bulletTime){
	        var bullet = bullets.getFirstExists(false);

	        if(bullet){
	            bullet.reset(player.x + 14,player.y);
	            bullet.body.velocity.y = -400;
	            bulletTime = game.time.now + 200;
	        }
	    }
		}

		function collisionHandler(bullet,enemy){
			bullet.kill();
			enemy.kill();
		}
	}

}

export default Main;
