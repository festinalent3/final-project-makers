export function generate(bullets, nr, key) {
  bullets.enableBody = true;
  bullets.createMultiple(nr, key);
  bullets.setAll('anchor.x', 0.3);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
}
