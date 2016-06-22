var bulletTime = 0;

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
		this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	};

	isAlive(player){
		player = player || this.player;
		return player.alive;
	};

	get ship(){
		return this.player;
	};

	fire(bullets, laser, fireButton, game, player) {
		fireButton = fireButton || this.fireButton;
		game = game || this.game;
		player = player || this.player;

	  if(fireButton.isDown) {
	    this.fireBullet(bullets, game, player);
	    laser.play();
	    return true;
	  }
	};

	fireBullet(bullets, game, player) {
	  if(game.time.now > bulletTime){
	    var bullet = bullets.getFirstExists(false);

	    if(bullet){
	      bullet.reset(player.x + 14, player.y);
	      bullet.body.velocity.y = -400;
	      bulletTime = game.time.now + 200;
	    }
	  }
	};

}

export default Player;
