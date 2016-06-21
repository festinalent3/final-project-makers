var bulletTime = 0;
var fireButton;

class Player {

	constructor(game){
		this.game = game;
		this.player = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'player');
		game.physics.arcade.enable(this.player);
	};    

	enableShip(){
		this.player.body.collideWorldBounds = true;
		this.player.animations.add('left', [0, 1, 2, 3, 4], 15, true);
		this.player.animations.add('right', [0, 1, 2, 3, 4], 15, true);
		fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}

	isAlive(player){
		player = player || this.player;
		return player.alive;
	}

	get ship(){
		return this.player;
	}

	fire(bullets, laser,fireButton) {
		fireButton = fireButton || this.fireButton;
	  if(fireButton.isDown) {
	    this.fireBullet(bullets);
	    laser.play();
	    return true;
	  }
	}

	fireBullet(bullets, game, player) {
		game = game || this.game;
		player = player || this.player;
		
	  if(this.game.time.now > bulletTime){
	    var bullet = bullets.getFirstExists(false);

	    if(bullet){
	      bullet.reset(this.player.x + 14, this.player.y);
	      bullet.body.velocity.y = -400;
	      bulletTime = this.game.time.now + 200;
	    }
	  }
	}
}

export default Player;