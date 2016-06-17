class Boot extends Phaser.State {

	preload() {
    this.game.load.image("loading","assets/Loading.png");
	}

	create() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.state.start("Preload");
	}

}

export default Boot;
