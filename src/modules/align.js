export default function align(group) {
  group.x = 170;
  group.y = 50;
  var index = -1;
  
  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 10; x++) {
      var child = group.getAt(index += 1)
      child.reset(x*50, y*60)
      child.anchor.setTo(0.5, 0.5);
    }
  }
}
