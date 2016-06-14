import move from '../modules/moves';
import makeMany from '../modules/makeMany';
import fire from '../modules/fire';
import * as handler from '../modules/handlers';

var spacefield;
var backgroundv;
var player;
var cursors;
var bullets;
var fireButton;
var enemies;

class Main extends Phaser.State {

	create() {
    // Set physics for the groups
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

		spacefield = this.game.add.tileSprite(0,0,800,600,"starfield");
    backgroundv = 5;
    player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'player');

    // Set physics for spaceship
    this.game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    cursors = this.game.input.keyboard.createCursorKeys();

    bullets = this.game.add.group();
    bullets.enableBody = true;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

    fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    enemies = this.game.add.group();
    enemies.enableBody = true;

    createEnemies(this.game);

    function createEnemies(game) {
    	for(var y = 0; y < 4; y++){
    		for(var x = 0; x < 10; x++){
    			var enemy = enemies.create(x*48,y*50, 'enemy');
    			enemy.anchor.setTo(0.5,0.5);
    		}
    	}
    	enemies.x = 100;
    	enemies.y = 50;

    	var tween = game.add.tween(enemies).to({x:200},2000,Phaser.Easing.Linear.None,true,0,1000,true)
    	tween.onLoop.add(descend, this);
    }

    function descend() {
    	enemies.y += 10;
    }

  }

  update() {
  	this.game.physics.arcade.overlap(bullets, enemies, handler.collision, null, this);
    spacefield.tilePosition.y += backgroundv;

		move(player, cursors, fireButton, this.game);

        fire(bullets, player, fireButton, this.game);

	 //  function fireBullet(game) {
	 //    if(game.time.now > bulletTime){
	 //        var bullet = bullets.getFirstExists(false);

	 //        if(bullet){
	 //            bullet.reset(player.x + 14,player.y);
	 //            bullet.body.velocity.y = -400;
	 //            bulletTime = game.time.now + 200;
	 //        }
	 //    }
		// }

	// 	function collision(bullet,enemy){
	// 		bullet.kill();
	// 		enemy.kill();
	// 	}
	}

}

export default Main;
