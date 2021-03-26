
class OutputCourse extends Phaser.Scene {

	constructor() {
		super("OutputCourse");
	}

	preload() {

		this.load.image('title', 'assets/images/OutputTitle.png');
		this.load.image('home', 'assets/images/home.png');
		this.load.image('backgound', 'assets/images/background.png');
		
		//title Course
		this.load.image('titleCourse', 'assets/images/titleCourse.png');
		
		//Quiz
		this.load.image('quiz', 'assets/images/quiz.png');
		//Course
		this.load.image('course', 'assets/images/course.png');
		
		//InputCourse Content
		this.load.image('OutputCourse', 'assets/images/OutputCourse.png');
		
    
	}

	create() {
		//add background
		this.add.image(400, 220, 'background');

		//add title
		this.add.sprite(420, 40, 'title');
		//add title course
		this.add.sprite(400, 80, 'titleCourse');
		
		//add InputCourse content
		this.add.sprite(450, 275, 'OutputCourse');
		
	

		//add home button
		var playButton = this.add.sprite(30, 30, 'home').setInteractive();
		playButton.on('pointerdown', function (event) {
  		this.scene.start('Home');
		//bg.destroy();
        //succes.destroy();
		}, this);
		
		//add course button
		var courseButton = this.add.sprite(60, 200, 'course').setInteractive();
		/*courseButton.on('pointerdown', function (event) {
  		this.scene.start('InputCourse');
		bg.destroy();
        succes.destroy();
		}, this);*/
		
		//add quiz button
		var quizButton = this.add.sprite(60, 280, 'quiz').setInteractive();
		quizButton.on('pointerdown', function (event) {
  		this.scene.start('OutputQuiz');
		//bg.destroy();
        //succes.destroy();
		}, this);

	}
}
