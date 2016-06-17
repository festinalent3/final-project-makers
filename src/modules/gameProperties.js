var bckArray = ["bck_1", "bck_2", "bck_3", "bck_4", "bck_5", "bck_6"];
var currentLVL = 1;

export function bulletsProperties(bullets, n, key) {
  bullets.enableBody = true;
  bullets.createMultiple(n, key);
  bullets.setAll('anchor.x', 0.3);
  bullets.setAll('anchor.y', 1);
  bullets.setAll('outOfBoundsKill', true);
  bullets.setAll('checkWorldBounds', true);
}

export function background(object, level){
  if(level > currentLVL)
  {
    object.loadTexture(bckArray[level - 1], 0);
  }
}
