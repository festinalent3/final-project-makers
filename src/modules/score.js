import * as explosion from "../modules/explosion"

var score = 0;

export function update(bullet, enemy, explosion){
	explosion = explosion || this.explosion;
	bullet.kill();
	explosion.explode(enemy);
	explosion.kaboom();
	scoreUp();
};

export function get(){
	return score;
};

function scoreUp() {
	score += 10;
};

export function reset(){
	score = 0;
}
