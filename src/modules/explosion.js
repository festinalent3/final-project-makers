var explosions;
var key = 'boom';
var boom;

export function set(game) {
	boom = game.add.audio('boom_sound');
	explosions = game.add.group();
	explosions.createMultiple(30, key);
	explosions.forEach(function(child) {
    	var self = this;
    	child.animations.add(key);
    }, self);
	return explosions;
}

export function explode(object) {
	object.kill();
	var explosion = explosions.getFirstExists(false);
	explosion.reset(object.body.x, object.body.y);
	explosion.play(key, 30, false, true);
}

export function kaboom() {
	boom.play();
}