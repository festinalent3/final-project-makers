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


  describe('#createMany', function() {
    var group;

    beforeEach(function(){
      group = {
        enableBody: false,
        create: function(x, y, key) {
          return key;
        }
      };

      spyOn(group,'create');
    });

    it('enables body of the group', function(){
      enemies.createMany(group, nr);
      expect(group.enableBody).toEqual(true);
    });

    it('calls the create function the specified nr of times', function(){
      enemies.createMany(group, nr);
      expect(group.create).toHaveBeenCalledTimes(nr);
    });
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


  describe("#update", function() {
    var level;
    var group;

    beforeEach(function() {
      level = 2;
      group = {
        forEach: function(value) {
          return value;
        }
      };

      spyOn(group, 'forEach').and.returnValue(true);

    });

    it('revives and updates the sprite key of each child', function(){
      enemies.update(2, group);
      expect(group.forEach).toHaveBeenCalled();
    });
  });


  describe("Enemies fire at player", function() {
    var group;
    var aliveEnemies
    var enemyBullets;
    var player;
    var shooter;
    var enemyBullet;

    beforeEach(function() {
      aliveEnemies = 0;
      player = {};
      enemyBullet = {
        reset: function(value1, value2){}
      };
      enemyBullets = {
        getFirstExists: function(value){
          return value;
        }
      };
      shooter = {
        alive: false,
        body: {
          x: 1,
          y: 2
        }
      };
      group = {
        countLiving: function() {}
      };
      spyOn(group, 'countLiving').and.returnValue(aliveEnemies);
      spyOn(enemyBullets, 'getFirstExists')
      spyOn(enemyBullet, 'reset')

    });

    describe("#fire", function() {

      it('does not fire if all enemies are dead when called', function(){
        enemies.fire(enemyBullets, player, group);
        expect(group.countLiving).toHaveBeenCalled();
        expect(enemyBullets.getFirstExists).not.toHaveBeenCalled();
      });
    });

    describe("#aimBullet", function() {
      it('does not fire if the shooter enemy is dead', function(){
        enemies.aimBullet(enemyBullet, shooter, player);
        expect(enemyBullet.reset).not.toHaveBeenCalled();
      });
    });
  });
});
