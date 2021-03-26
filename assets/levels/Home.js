
class Home extends Phaser.Scene {
	
	constructor() {
		super("Home");
	}
	
	preload(){

		//background
		this.load.image('background', 'assets/images/background.png');
		
		//input
		this.load.image('input', 'assets/images/input.png');
		
		//ouput
		
		//cadnat
		this.load.image('cadnat', 'assets/images/cadnat.png');
		

	}
	create() {
		
		
		//add background
		this.add.image(400, 220, 'background');
		
		
		//add input button to get input level
		var input = this.add.sprite(130, 110, 'input').setInteractive();
		input.on('pointerdown', function (event) {
  		this.scene.start('InputCourse');
		bg.destroy();
		}, this);
		
		//add Ouput button
		var output = this.add.sprite(390, 110, 'cadnat');
		output.on('pointerdown', function (event) {
  		this.scene.start('OutputCourse');
		bg.destroy();
		}, this);
		
		//add input button
		var outputInput = this.add.sprite(660, 110, 'cadnat').setInteractive();
		
		//add input button
		var micro = this.add.sprite(130, 340, 'cadnat').setInteractive();
		
		//add Ouput button
		var motherBoard = this.add.sprite(390, 340, 'cadnat').setInteractive();
		
		//add input button
		var storage = this.add.sprite(660,340, 'cadnat').setInteractive();
		
	}
	
}

