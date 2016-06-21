class Player {

	constructor(game){
		this.player = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'player');
		game.physics.arcade.enable(this.player);
	};    

	enableShip(){
		this.player.body.collideWorldBounds = true;
		this.player.animations.add('left', [0, 1, 2, 3, 4], 15, true);
		this.player.animations.add('right', [0, 1, 2, 3, 4], 15, true);
	}

	isAlive(player){
		player = player || this.player;
		return player.alive;
	}

	get ship(){
		return this.player;
	}
}

export default Player;