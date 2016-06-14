export  function setBulletProperties(bullets){
  //  We need to enable physics on the player
  // game.physics.arcade.enable(player);
  bullets.enableBody = true;
  bullets.createMultiple(30, 'bullet');
  bullets.setAll('anchor.x', 0.5);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
  console.log(bullets);

}
