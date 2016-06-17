import createMany from '../src/modules/createMany';

describe('createMany', function() {
  var key;
  var group;
  var nr;

  beforeEach(function(){
    key = 'enemy_1';
    nr = 40;
    group = {
      enableBody: false,
      create: function(x, y, key) {
        return key;
      }
    };

    spyOn(group,'create');
  });

  it('enables body of the group', function(){
    createMany(group, key, nr);
    expect(group.enableBody).toEqual(true);
  });

  it('calls the create function the specified nr of times', function(){
    createMany(group, key, nr);
    expect(group.create).toHaveBeenCalledTimes(nr);
  });
});
