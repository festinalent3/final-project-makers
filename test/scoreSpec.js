// import * as score from '../src/modules/score';

// describe('score', function() {
//   var bullet;
//   var enemy;
//   var scoreIncrease;

//   beforeEach(function(){
//     scoreIncrease = 10;

//     bullet = {
//       kill: function() {}
//     };

//     enemy = {
//       kill: function() {}
//     };

//     spyOn(bullet, 'kill');
//     spyOn(enemy, 'kill');

//     score.reset();
//   });


//   it('resets the score to 0', function(){
//     score.update(bullet, enemy);
//     expect(score.get()).toEqual(scoreIncrease);
//     score.reset();
//     expect(score.get()).toEqual(0);
//   });

//   it('kills bullet and enemy', function(){
//     score.update(bullet, enemy);
//     expect(bullet.kill).toHaveBeenCalled();
//     expect(enemy.kill).toHaveBeenCalled();
//   });

//   it('increases the score', function(){
//     score.update(bullet, enemy);
//     expect(score.get()).toEqual(scoreIncrease);
//   });

// });
