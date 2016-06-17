var attackReceived = false;
var lives = 3;

export function reduce(player, bullet){
	attackReceived = true;
	bullet.kill();
	if (lives < 1){
		player.kill();
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
}

export function reset(){
	lives = 3;
	attackReceived = false;
}
