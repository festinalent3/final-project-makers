import displayText from '../modules/displayText';
import * as reset from '../helpers/reset';

class GameOver extends Phaser.State {

	create() {
		this.game.add.tileSprite(0, 0, 800, 600, 'game_over');
		this.game.input.onTap.addOnce(this.restartGame, this);
	}

	restartGame() {
		reset.all();
		this.game.state.start("Main");
	}
}

export default GameOver;
