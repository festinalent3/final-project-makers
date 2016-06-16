export default function align(group) {
  //we are getting a group containing x children
  //we want to create evenly distributed rows of those children
  //max nr of children/row = 10

  //get total amount of children in group:
  var nrOfChildren = group.total();

  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 10; x++) {
      //get the current child
      var child = group.getAt(index)

      //set position of child
      child.anchor.setTo(x * 60, y * 50);

    }
  }

}
