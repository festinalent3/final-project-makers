var toggler = true;
var muteButton;

export function toggle(game) {
	muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);

	if(muteButton.isDown) {
		toggler = !toggler;
		game.sound.mute = toggler;
	}
}

//TODO: Unit test and add reset function for toggler when gameover
