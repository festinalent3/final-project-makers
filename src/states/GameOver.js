var stateText;
import * as handler from '../modules/handlers';
class GameOver extends Phaser.State {

	create() {
		//handler.resetLives();
		//this.game.add.button(0, 0, 'gameover', this.game.state.start("Main"),this.game );
		stateText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
		console.log(stateText);
		stateText.anchor.setTo(0.5, 0.5);
		stateText.visible = false;
		stateText.text=" GAME OVER \n Click to restart";
    stateText.visible = true;
    //console.log(this.restartGame)
    this.game.input.onTap.addOnce(this.restartGame,this);

	}

	restartGame() {
		handler.reset();
		this.game.state.start("Main");
	}


}

export default GameOver;
