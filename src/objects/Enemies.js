var enemiesArray = ["enemy_1", "enemy_2", "enemy_3", "enemy_4", "enemy_5", "enemy_6", "enemy_7"];

class Enemies {

  constructor(game, nr){
    this.game = game;
    this.nr = nr
    this.all = game.add.group();
  };

  init() {
    this.createMany();
    this.align();
    this.animate();
  };

  createMany(group, nr) {
    group = group || this.all;
    nr = nr || this.nr;

    group.enableBody = true;
    for (var i = 0; i < nr; i++)
    {
      group.create(i*10, 0, 'enemy_1');
    }
  };

  align(group) {
    group = group || this.all;
    var index = -1;
    for(var y = 0; y < 4; y++) {
      for(var x = 0; x < 10; x++) {
        var child = group.getAt(index += 1)
        child.reset(x*60, y*50)
        child.anchor.setTo(0.5, 0.5);
      }
    }
  };

  animate() {
    this.all.x = 100;
    this.all.y = 50;

    var tween;

    this.all.forEach(function (enemy, i) {
      tween = this.game.add.tween(enemy).to( { y: enemy.body.y + 5 }, 500, Phaser.Easing.Sinusoidal.InOut, true, this.game.rnd.integerInRange(0, 500), 1000, true);
      tween = this.game.add.tween(this.all).to( { x: 150 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    }, this);
    tween.onStart.add(descend, this);

    function descend() {
      this.game.add.tween(this.all).to( { y: this.all.y + 10 }, 2500, Phaser.Easing.Linear.None, true, 0, 0, false);
    }
  };


  update(level, group) {
    group = group || this.all;
    group.forEach(function(enemy) {
      enemy.revive();
      enemy.loadTexture(enemiesArray[level -1], 0);
    }, this);
  };


  fire(enemyBullets, player, group) {
    group = group || this.all;
    if (group.countLiving() > 0) {
      var enemyBullet = enemyBullets.getFirstExists(false);
      var shooter = group.getRandom(group.getIndex(group.getFirstAlive(false)), group.countLiving());
      this.aimBullet(enemyBullet, shooter, player);
    }
  };

  aimBullet(enemyBullet, shooter, player) {
    if(enemyBullet && shooter.alive) {
      enemyBullet.reset(shooter.body.x, shooter.body.y);
      this.game.physics.arcade.moveToObject(enemyBullet, player, 120);
    }
  };

};

export default Enemies;
