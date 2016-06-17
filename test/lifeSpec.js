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
});

  // it('kills bullet and enemy', function(){
  //   score.update(bullet, enemy);
  //   expect(bullet.kill).toHaveBeenCalled();
  //   expect(enemy.kill).toHaveBeenCalled();
  //   score.reset();
  // });

  // it('increases the score', function(){
  //   score.update(bullet, enemy);
  //   expect(score.get()).toEqual(scoreIncrease);
  //   score.reset();
  // });


// var attackReceived = false;
// var lives = 3;

// export function reduce(player, bullet){
// 	attackReceived = true;
// 	bullet.kill();
// 	if (lives < 1){
// 		player.kill();
// 	}
// };

// export function count(lifeText) {
// 	if (attackReceived){
// 		lives -= 1;
// 		lifeText.text = 'Lives: ' + lives;
// 		attackReceived = false;
// 	}
// };

// export function get(){
// 	return lives;
// }

// export function reset(){
// 	lives = 3;
// 	attackReceived = false;
// }
