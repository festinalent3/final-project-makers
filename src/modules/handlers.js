var toggle = true;

export function toggleSound(game) {
	toggle = !toggle;
	game.sound.mute = toggle;
}
