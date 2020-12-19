
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p1,p2,p3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p1 = new Dustbin
	p2= new Dustbin
	p3 - new Dustbin
	ball=Matter.Body.Circle;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  p1.display();
  p2.display();
  p3.display();
  ball;display();

  drawSprites();
 
}



