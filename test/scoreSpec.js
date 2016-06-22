import * as score from '../src/modules/score';

describe('score', function() {
  var bullet;
  var enemy;
  var scoreIncrease;
  var explosion;

  beforeEach(function(){
    scoreIncrease = 10;

    bullet = {
      kill: function() {}
    };

    enemy = {
      kill: function() {}
    };


    explosion = {
      explode: function(){},
      kaboom: function() {}
    }


    spyOn(bullet, 'kill');
    spyOn(explosion, 'explode');
    spyOn(explosion, 'kaboom');

    score.reset();
  });


  it('resets the score to 0', function(){
    score.update(bullet, enemy, explosion);
    expect(score.get()).toEqual(scoreIncrease);
    score.reset();
    expect(score.get()).toEqual(0);
  });

  it('kills bullet and enemy', function(){
    score.update(bullet, enemy, explosion);
    expect(bullet.kill).toHaveBeenCalled();
    expect(explosion.explode).toHaveBeenCalledWith(enemy);
    expect(explosion.kaboom).toHaveBeenCalled();
  });

  it('increases the score', function(){
    score.update(bullet, enemy, explosion);
    expect(score.get()).toEqual(scoreIncrease);
  });

});
