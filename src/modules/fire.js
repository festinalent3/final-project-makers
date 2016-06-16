var bulletTime = 0;
var fireButton;
var shooter;
var enemyBullet;

export function ship(bullets, object, game, fireButton, laser) {
  // fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  if(fireButton.isDown) {
    fireBullet(game, object, bullets);
    laser.play();
    return true;
  }
  // fireEnemyBullet(bullets, object);
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

export function enemy(enemyBullets, enemies, game, player) {
  shooter = enemies.getRandom(enemies.getIndex(enemies.getFirstAlive(false)), (enemies.countLiving()));
  enemyBullet = enemyBullets.getFirstExists(false);
  if(enemyBullet) {
    enemyBullet.reset(shooter.body.x, shooter.body.y);
    game.physics.arcade.moveToObject(enemyBullet, player, 120);
  }
}
