import align from '../src/modules/align';

describe('createMany', function() {

  var group;
  var nr;
  var child;

  beforeEach(function(){
    nr = 40;
    group = {
      getAt: function(value) {
        return value;
      }
    };

    child = {
      reset: function(value1, value2) {
        return value1;
      },
      anchor: {
        setTo: function(value1, value2) {
          return value1;
        }
      }
    };

    spyOn(group,'getAt').and.returnValue(child);
    spyOn(child,'reset');
    spyOn(child.anchor,'setTo');
  });



  it('aligns each child of the group', function(){
    align(group);
    expect(child.reset).toHaveBeenCalledTimes(nr);
    expect(child.anchor.setTo).toHaveBeenCalledTimes(nr);
  });

});
