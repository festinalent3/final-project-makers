export function generate(game, nr, key) {
  var bullets = game.add.group();
  bullets.enableBody = true;
  bullets.createMultiple(nr, key);
  setGeneralProperties(bullets);
  return bullets
}

export function update(bullets, nr) {
  bullets.createMultiple(nr, bullets.children[0].key);
  setGeneralProperties(bullets);
}

function setGeneralProperties(bullets) {
  bullets.setAll('anchor.x', 0.3);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
}
