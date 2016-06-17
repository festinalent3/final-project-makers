import * as life from '../src/modules/life';

describe('life', function() {
  var bullet;
  var attackReceived;
  var player;
  var lifeText;

  beforeEach(function(){

    bullet = {
      kill: function() {}
    };

    player = {
      kill: function() {}
    };

    lifeText = {
    	text: "Lives: 3"
    }

    spyOn(bullet,'kill');
    spyOn(player,'kill');
  });


  it('resets the life to 3', function(){
    life.reduce(player, bullet);
    life.count(lifeText)
    expect(life.get()).toEqual(2);
    life.reset();
    expect(life.get()).toEqual(3);
  });

    it('reduce life to 0', function(){
    	for(var i = 0; i < 3; i++) 
    	{
    	life.reduce(player, bullet);
    	life.count(lifeText);
  		}
    expect(life.get()).toEqual(0);
  });

  it('kills the player when life is 0', function(){
    	for(var i = 0; i < 3; i++) 
    	{
    	life.reduce(player, bullet);
    	life.count(lifeText);
  		}
    expect(player.kill).toHaveBeenCalled();
  });
});
