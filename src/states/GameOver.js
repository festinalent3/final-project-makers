import * as handler from '../modules/handlers';
import displayText from '../modules/displayText';
import * as reset from '../helpers/reset';

class GameOver extends Phaser.State {

	create() {
		var msg = displayText(this.game, "GAME OVER \n Click to restart", this.game.world.centerX, this.game.world.centerY, { font: '84px Arial', fill: '#fff' } );
		msg.anchor.x = 0.5;
		msg.anchor.y = 0.5;
		this.game.input.onTap.addOnce(this.restartGame, this);
	}

	restartGame() {
		reset.all();
		this.game.state.start("Main");
	}
}

export default GameOver;
