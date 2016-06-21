var lives = 3;

export function get(){
	return lives;
};

export function decrease() {
	lives -= 1;
};

export function reset(){ 
	lives = 3;
}
