import * as score from "../modules/score"
import * as life from "../modules/life"
import * as sound from "../modules/sound"


export function all(){
	score.reset();
	life.reset();
	sound.reset();
}
