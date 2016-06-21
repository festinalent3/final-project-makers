var toggler = false;

export function init(game, soundText) {
	game.sound.mute = toggler;
	var muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);
	muteButton.onDown.add(toggle, game, 0, game, soundText);
}

function toggle(PhaserKey, game, soundText) {
	toggler = !toggler;
	game.sound.mute = toggler;
	soundText.text = (toggler) ? "Sound: OFF" : "Sound: ON";
}

export function reset() {
	toggler = false;
}


//TODO: Unit test
