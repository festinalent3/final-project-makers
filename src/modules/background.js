var bckArray = ["bck_1", "bck_2", "bck_3", "bck_4", "bck_5", "bck_6"];
var currentLVL = 1;
var currentBck;
var backgroundVelocity = 5;


export function update(level){
  if(level > currentLVL)
  {
    currentBck.loadTexture(bckArray[level - 1], 0);
    backgroundVelocity += 4;
  }
}

export function create(game){
  currentBck = game.add.tileSprite(0, 0, 800, 600, bckArray[0]);
}

export function get() {
  return currentBck;
}

export function velocity() {
  return backgroundVelocity;
}
