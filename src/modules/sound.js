var toggler = true;
var muteButton;

export function toggle(game, soundText) {
	muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);

	if(muteButton.isDown) {
		toggler = !toggler;
		game.sound.mute = toggler;
		soundText.text = (toggler) ? "Sound: OFF" : "Sound: ON";
	}
}

export function reset() {
	toggler = true;
}
//TODO: Unit test and add reset function for toggler when gameover
