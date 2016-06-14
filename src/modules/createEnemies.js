export default function createEnemies(game, enemies) {
  for(var y = 0; y < 4; y++){
  	for(var x = 0; x < 10; x++){
  		var enemy = enemies.create(x*48,y*50, 'enemy');
  		enemy.anchor.setTo(0.5,0.5);
  	}
  }
  enemies.x = 100;
  enemies.y = 50;

  var tween = game.add.tween(enemies).to({x:200},2000,Phaser.Easing.Linear.None,true,0,1000,true)
  tween.onLoop.add(descend, this);
    
  function descend() {
   	enemies.y += 10;
  }
}