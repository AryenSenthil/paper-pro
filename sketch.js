var paper1




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



	
	paper1 = new paper(300,320,50,50);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper1.display();
  keyPressed();
}


function keyPressed(){
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}
