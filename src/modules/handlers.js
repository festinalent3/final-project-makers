var intersecting = false;
var score = 0;

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
