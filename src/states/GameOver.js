import * as handler from '../modules/handlers';
import displayText from '../modules/displayText';
class GameOver extends Phaser.State {

	create() {
		displayText(" GAME OVER \n Click to restart",this.game)
		this.game.input.onTap.addOnce(this.restartGame,this);
	}

	restartGame() {
		handler.reset();
		this.game.state.start("Main");
	}


}

export default GameOver;
