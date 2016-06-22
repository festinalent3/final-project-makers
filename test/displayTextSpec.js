import displayText from '../src/modules/displayText';

describe('displayText', function(){
	var game;
	var stateText = "";
	var stateTextV2;
  var txt = "Lives: 3";
  var options =  { font: '22px Arial', fill: '#FFF' }
  var x = 10;
  var y = 10;

  beforeEach(function(){
    game = {
      add: {
	    	text: function(value){
	       	return value;	
	      }
	    }
    };
    stateText = {
    	visible: false,
    	text: ""
    };
    stateTextV2 = {
    	visible: false,
    	text: "Lives: 3"
    };

    spyOn(game.add,'text').and.returnValue(stateText=stateTextV2);

  });

  it('returns the nice formated text', function(){
  	displayText(game, txt, x, y, options);
    expect(stateText.text).toEqual(txt);
    expect(stateText.visible).toEqual(true);
  });

});
