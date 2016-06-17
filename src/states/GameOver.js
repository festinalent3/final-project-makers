import * as handler from '../modules/handlers';
import displayText from '../modules/displayText';

class GameOver extends Phaser.State {

	create() {
		this.game.add.tileSprite(0, 0, 800, 600, 'game_over');
		this.game.input.onTap.addOnce(this.restartGame, this);
	}

	restartGame() {
		handler.reset();
		this.game.state.start("Main");
	}
}

export default GameOver;
