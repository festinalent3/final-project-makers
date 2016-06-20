export default function animate(group, game) {
	group.x = 100;
	group.y = 50;

	var tween;
	
	group.forEach(function (enemy, i) {
    tween = game.add.tween(enemy).to( { y: enemy.body.y + 5 }, 500, Phaser.Easing.Sinusoidal.InOut, true, game.rnd.integerInRange(0, 500), 1000, true);
    tween = game.add.tween(group).to( { x: 150 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
  });
	tween.onStart.add(descend, this);

	function descend() {
		game.add.tween(group).to( { y: group.y + 10 }, 2500, Phaser.Easing.Linear.None, true, 0, 0, false);
	}

}
