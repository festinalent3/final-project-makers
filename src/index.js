import Boot from './states/Boot';
import Preload from './states/Preload';
import GameTitle from './states/GameTitle';
import Main from './states/Main';
import GameOver from './states/GameOver';
import GameWon from './states/GameWon';

class Game extends Phaser.Game {

	constructor() {

		super(800, 600, Phaser.AUTO, 'game')
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('GameTitle', GameTitle, false);
		this.state.add('Main', Main, false);
		this.state.add('GameOver', GameOver, false);
		this.state.add('GameWon', GameWon, false);

		this.state.start('Boot');
	}

}

new Game();
