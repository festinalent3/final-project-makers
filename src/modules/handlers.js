
var intersecting = false;
var score = 0;

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
