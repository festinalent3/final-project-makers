export default function move(player, cursors, fireButton, game) {

  player.body.velocity.x = 0;

  if(cursors.left.isDown) {
    player.body.velocity.x = -350;
  }
  if(cursors.right.isDown) {
      player.body.velocity.x = 350;
  }
}
