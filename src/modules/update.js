export default function update(group, key) {
  var index = -1;
  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 10; x++) {
      var child = group.getAt(index += 1)
      child.reset(x*60, y*50)
      child.loadTexture(key, 0);
    }
  }
}
