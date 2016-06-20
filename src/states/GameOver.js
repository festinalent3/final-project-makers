import displayText from '../modules/displayText';
import * as reset from '../helpers/reset';
import * as score from "../modules/score"

class GameOver extends Phaser.State {

	create() {
		this.game.add.tileSprite(0, 0, 800, 600, 'game_over');
		this.game.add.tileSprite(0, 0, 800, 35, "topBar");
	  var scoreText = displayText(this.game, '', 350, 5, { font: '22px Arial', fill: '#D4FF2A' });
    scoreText.text = 'Score: ' + score.get();
		this.game.input.onTap.addOnce(this.restartGame, this);
	}

	restartGame() {
		reset.all();
		this.game.state.start("Main");
	}
}

export default GameOver;
