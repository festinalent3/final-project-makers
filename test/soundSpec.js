import * as sound from '../src/modules/sound';

describe('sound', function() {
  var game;
  var soundText;
  var PhaserKey;

  beforeEach(function(){
    PhaserKey = {}

    game = {
      sound: {
        mute: false
      }
    };

    soundText = {
      text: 'Sound: ON'
    };
  });

  it('toggles volume OFF', function(){
    sound.toggle(PhaserKey, game, soundText)
    expect(game.sound.mute).toEqual(true);
    expect(soundText.text).toEqual("Sound: OFF");
  });

  it('toggles volume ON', function(){
    sound.toggle(PhaserKey, game, soundText)
    expect(game.sound.mute).toEqual(false);
    expect(soundText.text).toEqual("Sound: ON");
    sound.reset();
  });

});
