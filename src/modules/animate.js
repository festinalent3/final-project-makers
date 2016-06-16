export default function animate(group, game) {
	group.x = 100;
	group.y = 50;

	// var tween = moveSideWays();
	var tween = game.add.tween(group).to( {x:150}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	tween.onStart.add(descend, this);

	function descend() {
		game.add.tween(group).to( {y:250}, 10000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	}

	// function moveSideWays() {
	// 	return game.add.tween(group).to( {x:150}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
	// }

}
