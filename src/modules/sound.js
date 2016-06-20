var toggler = false;
var muteButton;

export function toggle(game, soundText) {
	this.game = game;
	muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);

	if(muteButton.isDown) {
		toggler = !toggler;
		game.sound.mute = toggler;
		soundText.text = (toggler) ? "Sound: OFF" : "Sound: ON";
	}
}

export function reset() {
	toggler = false;
	this.game.sound.mute = toggler;
}
//TODO: Unit test 
