import ExampleObject from '../objects/ExampleObject';
import Dude from '../objects/Dude';
import setProperties from "../modules/playerProperties"
// import * as moves from "../modules/moves"
import move from '../modules/moves';
import makeMany from '../modules/makeMany';
// import collectStar from 'modules/collectStar';

var dude;
var cursors;
var platforms;
var stars;
var score = 0;


class Main extends Phaser.State {


	create() {

		//Enable Arcade Physics
		// this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//
		// //Set the games background colour
		// this.game.stage.backgroundColor = '#cecece';

		// Example of including an object
		// let exampleObject = new ExampleObject(this.game);

		//  We're going to be using physics, so enable the Arcade Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    this.game.add.sprite(0,100, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, this.game.world.height - 210, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;

    // The player and its settings
		dude = new Dude(this.game);
		this.game.physics.arcade.enable(dude);
		setProperties(dude);

    //  Finally some stars to collect
    stars = this.game.add.group();
    // We will enable physics for any star that is created in this group
    stars.enableBody = true;
		makeMany(stars, 12);

    // //  The score
    this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

    //  Our controls.
    cursors = this.game.input.keyboard.createCursorKeys();


	}




	update() {

		this.game.physics.arcade.collide(dude, platforms);
		this.game.physics.arcade.collide(stars, platforms);

		move(dude, cursors);




		    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
		    this.game.physics.arcade.overlap(dude, stars, collectStar, null, this);

				function collectStar(player, star) {

						// Removes the star from the screen
						star.kill();

						//  Add and update the score
						score += 10;
						this.scoreText.text = 'Score: ' + score;

				}

	}





}

export default Main;
