import Player from '../src/objects/Player.js';

describe('Player', function(){
	var game
	var player

 beforeEach(function(){
    game = {
      add: {
        sprite: function(game.world.centerX, game.world.centerY) {}
      }
    }
    spyOn(sprite, add);
  });

 describe('initialization', function(){
    player = new Player(game);

    // spyOn(sprite, add);

    it('create a player sprite',function(){
    	player.game.add.sprite(game.world.centerX, game.world.centerY);
    	expect(game.add.sprite).toHaveBeenCalled();
    })
 })

})