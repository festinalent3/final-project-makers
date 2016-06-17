// import animate from '../src/modules/animate';
//
// describe('animate', function() {
//
//   var group;
//   var tween;
//   var game;
//   var moveSideWays;
//
//   beforeEach(function(){
//
//   group = {
//     x: 0,
//     y: 0
//   };
//
//   tween = {
//     onStart: {
//       add: function(value1, value2) {
//         return value1;
//       }
//     }
//   };
//
//     game = {
//       add: { tween: function(value) {
//         // this.to = function(value) {
//         //   return value
//         // }
//         return value;
//       }
//     }
//   };
//
//   moveSideWays = function() {}
//   // moveSideWays = jasmine.createSpy().and.callFake(moveSideWays);
//
//   spyOn(animate, 'moveSideWays').and.returnValue(tween);
//
//   // spyOn(game.add, 'tween')//.and.returnValue(true);
//   // spyOn(moveSideWays).and.returnValue(tween);
//   spyOn(tween.onStart, 'add')//.and.returnValue(true);
//
// });
//
// it('sets x/y coordinates', function(){
//   animate(group, game);
// });
//
// });
