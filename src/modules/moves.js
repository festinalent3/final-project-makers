export default function move(dude, cursors) {
// console.log(dude, cursors)
  dude.body.velocity.x = 0;

  if (cursors.left.isDown)
  {
    //  Move to the left
    dude.body.velocity.x = -150;

    dude.animations.play('left');
  }
  else if (cursors.right.isDown)
  {
    //  Move to the right
    dude.body.velocity.x = 150;

    dude.animations.play('right');
  }
  else
  {
    //  Stand still
    dude.animations.stop();

    dude.frame = 4;
  }

  //  Allow the dude to jump if they are touching the ground.
  if (cursors.up.isDown && dude.body.touching.down)
  {
    dude.body.velocity.y = -350;
  }
}
