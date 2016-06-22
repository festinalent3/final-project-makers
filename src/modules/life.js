import * as explosion from "../modules/explosion"

var attackReceived = false;
var lives = 3;

export function reduce(player, bullet, animatePlayer) {
	attackReceived = true;
	bullet.kill();
	animatePlayer = animatePlayer || this.animatePlayer(player);
};

export function animatePlayer(player) {
	explosion.explode(player);
	explosion.kaboom();
	if (lives > 0) {
		setTimeout(function() {
			player.reset(player.body.x,player.body.y);
		}, 500);
	}
};

export function count(lifeText) {
	if (attackReceived){
		lives -= 1;
		lifeText.text = 'Lives: ' + lives;
		attackReceived = false;
	}
};

export function get(){
	return lives;
};

export function reset(){
	lives = 3;
	attackReceived = false;
};
