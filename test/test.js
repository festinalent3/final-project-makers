import testModule from '../src/modules/testModule';

describe('test test', function() {
  it('should LOL', function() {
    expect(testModule('LOL')).toEqual('LOL');
  })
})
