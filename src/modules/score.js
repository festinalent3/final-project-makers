import * as explosion from "../modules/explosion"

var score = 0;

export function update(bullet, enemy, explodeNow){
	explodeNow = explodeNow || explosion;
	bullet.kill();
	explodeNow.explode(enemy);
	explodeNow.kaboom();
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
