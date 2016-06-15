export default function move(player, cursors, game) {

  player.body.velocity.x = 0;
  
  if(cursors.left.isDown) {
    player.body.velocity.x = -350;
    player.animations.play('left');
  }
  if(cursors.right.isDown) {
      player.body.velocity.x = 350;
      player.animations.play('left');
  }

}
