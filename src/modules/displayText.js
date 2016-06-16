var  stateText;
export default function displayText(stateText1,game) {
	stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
	stateText.anchor.setTo(0.5, 0.5);
	//stateText.visible = false;
	stateText.text=stateText1;
  stateText.visible = true;
}
