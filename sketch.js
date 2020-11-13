
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var  box1, box2 , box3;
var paper , paperimg;
var dustbin;


function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	box1 = new DustBin(1195 , 550 , 120 , 20);
	box2 = new DustBin(1250 , 510 , 20 , 120);
	box3 = new DustBin(1125 , 510 , 20 , 120);
	dustbin = new DustBin1(1190 , 500 , 0, 0);

	paper = new PaperBall(100 , 565, 30);

	ground = new Ground(750 , 570);

	Engine.run(engine)
	keyPressed();
  
}


function draw() {
  
  background(0);
  
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  paper.display();

 dustbin.display();
 
 
 
	
	Engine.update(engine)
 
}
  
 
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(paper.body , paper.body.position , { x:250 , y:-170 })
	  Engine.update(engine)
  }

  
}



