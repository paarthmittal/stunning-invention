var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var static;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	

	static={
		isStatic:true
	} 
	pbounce={
		restitution:1
	}
	engine = Engine.create();
	world = engine.world;
	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , static );
	
	packageBody = Bodies.rectangle(width/2 , 200 , 10 ,10, pbounce,static);
	World.add(world, ground);
	 World.add(world,packageBody);

	 packageSprite=createSprite(width/2,200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)

  helicopterSprite=createSprite(width/2, 200, 10,10);
  helicopterSprite.addImage(helicopterIMG)
  helicopterSprite.scale=0.6
}

function draw() {
	
  background('black');
  rectMode(CENTER);

  keyPressed()  
  Engine.update(engine); 		
  drawSprites();
  
}

function keyPressed() {
 if (keyCode===DOWN_ARROW)  {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
background('black')
packageSprite.x=packageBody.position.x
packageSprite.y=packageBody.position.y
Matter.Body.setStatic(packageBody,false);

  }
}



