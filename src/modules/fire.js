
var bulletTime = 0;
var fireButton;

export function ship(bullets, object, game, laser) {

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  if(fireButton.isDown) {
    fireBullet(game, object, bullets);
    laser.play();
    return true;
  }
}

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
