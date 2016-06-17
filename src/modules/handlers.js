var toggle = true;
var intersecting = false;


export function toggleSound(game) {
	toggle = !toggle;
	game.sound.mute = toggle;
}
