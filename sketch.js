
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin1,dustbin2,dustbin3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Paper(50,600);
  dustbin1 = new Dustbin(600,640,200,15); 
  dustbin2 = new Dustbin(507.5,597.5,15,100)
  dustbin3 = new Dustbin(692.5,597.5,15,100); 
  ground1 = new Ground(400,650,800,10);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper1.debug = true;
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Engine.update(engine);
    Matter.Body.applyForce(paper1.body, paper1.body.position,{x:55,y:-60})
  } 
  
}


