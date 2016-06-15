var intersecting = false;
var attackReceived = false;
var score = 0;
var lives = 3;

export function collision(bullet,enemy){
	intersecting = true;
	bullet.kill();
	enemy.kill();
};

export function calculateScore(scoreText) {
	if(intersecting){
		score = score += 10;
		scoreText.text = 'Score:' + score;
		intersecting = false;
	}
};

export function killPlayer(player, bullet){
	attackReceived = true;
	bullet.kill();
	if (lives <= 1){
    player.kill();
  }
}

export function LifeScore(lifeText) {
	if (attackReceived){
	  lives -= 1;
	  lifeText.text = 'Lives: ' + lives;
	  attackReceived = false;
	} 
};

