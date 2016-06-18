var toggler = true;
var muteButton;

export function toggle(game, soundText) {
	muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);

	if(muteButton.isDown) {
		toggler = !toggler;
		game.sound.mute = toggler;
		soundText.text = 'Sound: off'
	}
}

// for(var x = 0; x < 10; x++) {
//       var child = group.getAt(index += 1)
//       child.reset(x*60, y*50)
//       child.anchor.setTo(0.5, 0.5);
//     }