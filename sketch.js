const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paperObject;

function preload()
{
	dustbinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 650, 800, 10);
	side1 = new Dustbin(600, 640, 200, 10);
	side2 = new Dustbin(510, 560, 10, 150);
	side3 = new Dustbin(690, 560, 10, 150);
	paper = new Paper(50, 200,50);

	Engine.run(engine);
	launcher = new Launcher(paper.body,{x : 300, y : 500});
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
    strokeWeight(4);
  side1.display();
  ground.display();
  side2.display();
  side3.display();
 paper.display();
 launcher.display();
  drawSprites();
  imageMode(CENTER);
 image(dustbinIMG, 600, 560, 210, 180);
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    launcher.fly();
}


