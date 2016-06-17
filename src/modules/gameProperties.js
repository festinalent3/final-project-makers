export function bulletsProperties(bullets, n, key) {
  bullets.enableBody = true;
  bullets.createMultiple(n, key);
  bullets.setAll('anchor.x', 0.3);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
}

export function background(object, key){
	object.key = key;
	object.loadTexture(key, 0);
}
