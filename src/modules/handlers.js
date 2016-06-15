
var intersecting = false;
var attackReceived = false;
var score = 0;
var lives = 3;

export function collision(bullet,enemy){
	bullet.kill();
	enemy.kill();
	scoreUp();
};

export function getScore(){
	return score;
}

function scoreUp() {
	score += 10;
}

export function killPlayer(player, bullet){
	attackReceived = true;
	bullet.kill();
	if (lives < 1){
		player.kill();
	}
}

export function lifeScore(lifeText) {
	if (attackReceived){
		lives -= 1;
		lifeText.text = 'Lives: ' + lives;
		attackReceived = false;
	}
};
