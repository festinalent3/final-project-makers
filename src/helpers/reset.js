import * as score from "../modules/score"
import * as life from "../modules/life"
import * as sound from "../modules/sound"
import * as background from "../modules/background"



export function all(){
	score.reset();
	life.reset();
	sound.reset();
	background.reset();
}
