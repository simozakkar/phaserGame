
class OutputQuiz extends Phaser.Scene {

	constructor() {
		super("OutputQuiz");
	}

	preload() {

		this.load.image('title', 'assets/images/OutputTitle.png');
		this.load.image('home', 'assets/images/home.png');
		this.load.svg('suivant', 'assets/images/suivant.svg');
		this.load.image('backgound', 'assets/images/background.png');
		this.load.image('bg', 'assets/images/bg.png');
		//title Quiz
		this.load.image('titleQuiz', 'assets/images/titleQuiz.png');
		
		//Quiz
		this.load.image('quiz', 'assets/images/quiz.png');
		//Course
		this.load.image('course', 'assets/images/course.png');
    	//box Yes
		this.load.image('boxYes', 'assets/images/boxYes.png');
		
		//box No
		this.load.image('boxNo', 'assets/images/boxNo.png');
		
		//Question
		this.load.image('question', 'assets/images/questionOutput.png');
		
		//load images quiz
		this.load.image('mouse', 'assets/images/inputQuiz/mouse.png');
		this.load.image('casque', 'assets/images/inputQuiz/casque.png');
		this.load.image('cd', 'assets/images/inputQuiz/cd.png');
		this.load.image('keyboard', 'assets/images/inputQuiz/keyboard.png');
		this.load.image('micro', 'assets/images/inputQuiz/micro.png');
		this.load.image('monitor', 'assets/images/inputQuiz/monitor.png');
		this.load.image('usb', 'assets/images/inputQuiz/usb.png');
		this.load.image('webcam', 'assets/images/inputQuiz/webcam.png');
		this.load.image('camera', 'assets/images/inputQuiz/camera.png');
		this.load.image('scanner', 'assets/images/inputQuiz/scanner.png');
		
		
		
		//load son
		this.load.audio('placed', ['assets/song/placed.mp3', 'assets/song/placed.mp3']);
		this.load.audio('wrong', ['assets/song/wrong.mp3', 'assets/song/wrong.mp3']);
		
	}

	create() {
		var s = this;
		//add sound for correct answer
		var fx = this.sound.add('placed');
	
		
		
		//add sound for wrong answer
		var fxwrong = this.sound.add('wrong');
		
		//add background
		this.add.image(400, 220, 'background');

		//add title
		this.add.sprite(420, 40, 'title');
		//add title quiz
		this.add.sprite(400, 80, 'titleQuiz');
		
		//add question
		this.add.sprite(460, 160, 'question');
		
		//add Box Yes
		this.add.sprite(290, 320, 'boxYes');
		
		//add Box No
		this.add.sprite(670, 320, 'boxNo');

		//add dragable images
		
		var casque = this.add.sprite(510, 160, 'casque').setInteractive();
		casque.visible = false;
		casque.scale=0.6;
		
		var cd = this.add.sprite(510, 160, 'cd').setInteractive();
		cd.visible = false;
		cd.scale=0.6;
		
		var keyboard = this.add.sprite(510, 160, 'keyboard').setInteractive();
		keyboard.visible = false;
		keyboard.scale=0.6;
		
		var micro = this.add.sprite(510, 160, 'micro').setInteractive();
		micro.visible = false;
		micro.scale=0.6;
		
		var monitor = this.add.sprite(510, 160, 'monitor').setInteractive();
		monitor.visible = false;
		monitor.scale=0.6;
		
		var usb = this.add.sprite(510, 160, 'usb').setInteractive();
		usb.visible = false;
		usb.scale=0.6;

		var scanner = this.add.sprite(510, 160, 'scanner').setInteractive();
		scanner.visible = false;
		scanner.scale=0.6;
		
		var webcam = this.add.sprite(510, 160, 'webcam').setInteractive();
		webcam.visible = false;
		webcam.scale=0.6;
		
		var mouse = this.add.sprite(510, 160, 'mouse').setInteractive();
		mouse.visible = false;
		mouse.scale=0.6;

		var camera = this.add.sprite(510, 160, 'camera').setInteractive();
		camera.scale=0.6;
		
		
		this.input.setDraggable(camera);
		camera.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		camera.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				mouse.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		this.input.setDraggable(mouse);
		mouse.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		mouse.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				webcam.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
        
        
		this.input.setDraggable(webcam);
		webcam.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        webcam.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				scanner.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });

        this.input.setDraggable(scanner);
		scanner.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        scanner.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				usb.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
        
        
        this.input.setDraggable(usb);
		usb.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        usb.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				monitor.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		
		this.input.setDraggable(monitor);
		monitor.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        monitor.on('dragend', function (pointer) {
			if(this.x<420 && this.x>160 && this.y>190 && this.y<450){
				//tiiit
				this.visible =  false;
				micro.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		this.input.setDraggable(micro);
		micro.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        micro.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				//tiiit
				this.visible =  false;
				keyboard.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		this.input.setDraggable(keyboard);
		keyboard.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        keyboard.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				cd.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		this.input.setDraggable(cd);
		cd.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        cd.on('dragend', function (pointer) {
			if(this.x<780 && this.x>600 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				casque.visible = true;
				fx.play();
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		this.input.setDraggable(casque);
		casque.on('drag', function (pointer, dragX, dragY) {
            this.x = dragX;
            this.y = dragY;
        });
        
		
        casque.on('dragend', function (pointer) {
			if(this.x<420 && this.x>160 && this.y>190 && this.y<450){
				
				//tiiit
				this.visible =  false;
				fx.play();
				
				const bg = s.add.image(400,220,'bg');
				bg.alpha=0.9;	
				//add  button
				var OutputButton = s.add.sprite(400, 240, 'suivant').setInteractive();
				OutputButton.on('pointerdown', function (event) {
		  		s.scene.start('Home');
				}, s);
				var playButton = s.add.sprite(30, 30, 'home').setInteractive();
				playButton.on('pointerdown', function (event) {
	  			s.scene.start('Home');
				}, s);
			}
			else{
				
				this.x = 510;
				this.y = 160;
				fxwrong.play();
			}
        });
		
		
		
		
		//add home button
		var playButton = this.add.sprite(30, 30, 'home').setInteractive();
		playButton.on('pointerdown', function (event) {
  		this.scene.start('Home');
		bg.destroy();
        succes.destroy();
		}, this);
		
		//add course button
		var courseButton = this.add.sprite(60, 200, 'course').setInteractive();
		courseButton.on('pointerdown', function (event) {
  		this.scene.start('OutputCourse');
		bg.destroy();
        succes.destroy();
		}, this);
		
		//add quiz button
		var quizButton = this.add.sprite(60, 280, 'quiz').setInteractive();
		quizButton.on('pointerdown', function (event) {
  		this.scene.start('OutputQuiz');
		bg.destroy();
        succes.destroy();
		}, this);
		

		

	}
}
