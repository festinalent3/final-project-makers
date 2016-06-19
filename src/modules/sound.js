var toggler = true;
var muteButton;

export function toggle(game, soundText) {
	muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);

	if(muteButton.isDown) {
		if(toggler = !toggler){

			game.sound.mute = toggler;
			soundText.text = 'Sound: off';
		} else {
			toggler = !!toggler;
			game.sound.mute = toggler;
			soundText.text = 'Sound: on';
		}
	}
}
