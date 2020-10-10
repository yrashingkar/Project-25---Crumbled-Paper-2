
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binR = new Dustbin(1330, 502, 20, 285, 1);
	binL = new Dustbin(1070, 502, 20, 285, 1);
	binB = new Dustbin(1200, 510, 300, 20, 15);
	//bin = new Dustbin(1300, 565, 250,20);
	ground = new Ground(width/2,670,1600,20);
	paperball = new Paper(200,555,140);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
	paperball.display();
	ground.display();
	binR.display();
	binL.display();
	binB.display();
 
}


 function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1200,y:-1200})
	}
}
