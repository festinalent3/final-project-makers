var enemiesArray = ["enemy_1", "enemy_2", "enemy_3", "enemy_4", "enemy_5", "enemy_6"];

export default function update(group, level) {
  var index = -1;
  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 10; x++) {
      var child = group.getAt(index += 1)
      child.reset(x*60, y*50)
      child.loadTexture(enemiesArray[level -1], 0);
    }
  }
}
