export default function align(group) {
  var index = -1;
  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 10; x++) {
      var child = group.getAt(index += 1)
      child.reset(x*60, y*50)
      child.anchor.setTo(0.5, 0.5);
    }
  }
}
