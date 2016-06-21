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
});
