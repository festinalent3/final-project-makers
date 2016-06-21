import Player from '../src/objects/Player.js';

describe('Player', function(){
	var game;
	var player;

	beforeEach(function(){
		game = {
			world: function(x){
				return x;
			},
			add: {
				sprite: function(x,y,key) {
					return key;
				}
			},
			physics : {
				arcade: {
					enable: function(x){
						return x;
					}
				}
			}
		};

		spyOn(game.add, 'sprite');
		player = new Player(game);
	});

	describe('initialization', function(){
		it('creates a player sprite', function(){
			expect(game.add.sprite).toHaveBeenCalled();
		});
	});

	describe('isAlive', function(){
		var newPlayer;

		beforeEach(function(){
			player = {
				alive: true
			}
			newPlayer = new Player(game);
		});

		it('returns if player is alive or not', function(){
			expect(newPlayer.isAlive(player)).toEqual(true);
			player.alive = false;
			expect(newPlayer.isAlive(player)).toEqual(false);
		});
	});

	describe('#fire, indirectly testing #fireBullet', function(){

		var anotherPlayer;
		var fireButton;
		var bullets;
		var laser;
		var bulletTime;
		var bullet;
		var game;
		var player;

		beforeEach(function(){
			fireButton = {
				isDown: false
			};

			player = {
				alive: true,
				x: 5,
				y: 5
			};

			bullets = {
				getFirstExists: function(value){
					return value;
				}
			};

			laser = {
				play: {
					function() {}
				}
			};

			game = {
				time: {
					now: 10
				},
				add: {
					sprite: function(v1, v2, v3){}
				},
				physics: {
					arcade: {
						enable: function(value){}
					}
				},
				world: {
					centerX: 100,
					centerY: 200
				}
			};

			bullet = {
				reset: function (value1, value2) {},
				body: {
					velocity: {
						y: 1000
					}
				}
			};

			bulletTime = 0;
			anotherPlayer = new Player(game);

			spyOn(laser, 'play');
			spyOn(bullets, 'getFirstExists').and.returnValue(bullet);
			spyOn(bullet, 'reset' );
		});

		it('does not fire if the fire button is not pressed', function(){
		        fireButton.isDown = false;
		        anotherPlayer.fire(bullets, laser, fireButton, game, player);
		        expect(bullets.getFirstExists).not.toHaveBeenCalled();
		});  
    

		it('sets the correct properties in #fireBullet', function(){
			fireButton.isDown = true;
			anotherPlayer.fire(bullets, laser, fireButton, game, player);
			expect(bullet.reset).toHaveBeenCalled();
			expect(bullet.body.velocity.y).toEqual(-400);
		});

		it('plays the laser animation sound', function(){
			fireButton.isDown = true;
			anotherPlayer.fire(bullets, laser, fireButton, game, player);
			expect(laser.play).toHaveBeenCalledTimes(1);
		});

	});

});
