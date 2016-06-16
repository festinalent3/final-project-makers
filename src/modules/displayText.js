export default function displayText(game, txt, x, y, options) {
	var  stateText;
	stateText = game.add.text(x, y, txt, options);
  stateText.visible = true;
  return stateText;
}
