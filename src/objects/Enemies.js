var enemiesArray = ["enemy_1", "enemy_2", "enemy_3", "enemy_4", "enemy_5", "enemy_6", "enemy_7"];

class Enemies {

  constructor(game, nr){
    this.game = game;
    this.all = game.add.group();
    this.createMany(nr);
    this.align();
    this.animate();
  }

  createMany(nr) {
    this.all.enableBody = true;

    for (var i = 0; i < nr; i++)
    {
      this.all.create(i*10, 0, 'enemy_1');
    }

  }

  align() {
    var index = -1;
    for(var y = 0; y < 4; y++) {
      for(var x = 0; x < 10; x++) {
        var child = this.all.getAt(index += 1)
        child.reset(x*60, y*50)
        child.anchor.setTo(0.5, 0.5);
      }
    }
  }


  animate() {
    this.all.x = 100;
    this.all.y = 50;

    var tween = this.game.add.tween(this.all).to( {x:150}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    tween.onStart.add(descend, this);

    function descend() {
      this.game.add.tween(this.all).to( {y:250}, 10000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    }
  }


  update(level) {
    this.all.forEach(function(enemy) {
      enemy.revive();
      enemy.loadTexture(enemiesArray[level -1], 0);
    }, this);
  }
}




export default Enemies;
