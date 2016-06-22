import move from '../src/modules/moves';

describe('move', function() {
  var cursors;
  var player;

  beforeEach(function(){

    player = {
      body: {
        velocity: {
          x: 0,
          y: 0
        }
      },
      animations: {
        play: function(value){}
      }
    };

    cursors = {
      left: {
        isDown: true
      },
      right: {
        isDown: false
      }
    }

    spyOn(player.animations,'play');

  });

  it('moves the player to the left', function(){
    move(player, cursors);
    expect(player.body.velocity.x).toEqual(-350);
    expect(player.animations.play).toHaveBeenCalledWith('left');
  });

  it('moves the player to the right', function(){
    cursors.left.isDown = false;
    cursors.right.isDown = true;

    move(player, cursors);
    expect(player.body.velocity.x).toEqual(350);
    expect(player.animations.play).toHaveBeenCalledWith('right');
  });
});
