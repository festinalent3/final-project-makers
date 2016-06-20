import Enemies from '../src/objects/Enemies.js';

describe('Enemies', function() {

  var nr;
  var game;
  var enemies;

  beforeEach(function(){
    nr = 40;
    game = {
      add: {
        group: function() {}
      }
    }

    enemies = new Enemies(game, nr);
  });

  describe("#align", function() {
    var child;
    var group;
    beforeEach(function() {


      child = {
        reset: function(value1, value2) {
          return value1;
        },
        anchor: {
          setTo: function(value1, value2) {
            return value1;
          }
        }
      };

      group = {
        getAt: function (value) {
          return value;
        }
      };

      spyOn(group, 'getAt').and.returnValue(child);
      spyOn(child, 'reset');
      spyOn(child.anchor, 'setTo');

    });

    it('aligns each child of the group', function(){
      enemies.align(group);
      expect(child.reset).toHaveBeenCalledTimes(nr);
      expect(child.anchor.setTo).toHaveBeenCalledTimes(nr);
    });

  });

});
