 export default function fire(bullets, player, fireButton, game) {

 	if(fireButton.isDown) {
 		fireBullet(game, player, bullets);
 		}
 	}
 	var bulletTime = 0;
 	function fireBullet(game, player, bullets) {
 		if(game.time.now > bulletTime){
 			var bullet = bullets.getFirstExists(false);

 			if(bullet){
 				bullet.reset(player.x + 14,player.y);
 				bullet.body.velocity.y = -400;
 				bulletTime = game.time.now + 200;
 			}
 		}
 	}
