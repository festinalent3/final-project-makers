import * as background from '../src/modules/background';

describe('background', function() {
  var bckArray = ["bck_1", "bck_2", "bck_3", "bck_4", "bck_5", "bck_6", "bck_1"];
  var level = 1;
  var game;
  var currentLVL;
  var backgroundVelocity = 5;
  var currentBck;

  beforeEach(function(){
    currentLVL = 1;
    level = 1;

    currentBck = {
      loadTexture: function(x,y, key) {}
      };

      game = {
        add: {
          tileSprite: function(x,y,z,w,key){
            return key;
        }
      }
    };

    spyOn(currentBck, 'loadTexture').and.returnValue(currentBck.key=bckArray[level-1]);
    spyOn(game.add, 'tileSprite').and.returnValue(currentBck);

    background.reset();
  });


  it('update and resets the background', function(){
    background.create(game)
    background.update(level);
    expect(background.get()).toEqual(currentBck);
    background.reset();
    expect(background.get().key).toEqual(bckArray[0]);
  });

  it('adds velocity per level', function(){
    background.create(game)
    level += 1
    background.update(level);
    expect(background.velocity()).toEqual(9);
  });

  // it('increases the score', function(){
  //   score.update(bullet, enemy);
  //   expect(score.get()).toEqual(scoreIncrease);
  // });

});
