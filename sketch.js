var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottombody
var myworld,myengine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 5,5);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

	myengine = Engine.create();
	myworld = myengine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {density:1,friction:1,restitution:0.2, isStatic:true});
	World.add(myworld, packageBody);
	

	//Create Ground
  //	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 //	World.add(myworld, ground);

	//Create Left red Body
	leftbody = Bodies.rectangle(360,590, 20, 100 , {isStatic:true} );
    World.add(myworld, leftbody);
	 
	 //Create right red Body
    rightbody = Bodies.rectangle(540,590, 20, 100 , {isStatic:true} );
    World.add(myworld, rightbody);
	
	//Create bottom red Body
	bottombody = Bodies.rectangle(450,635,200, 20 , {friction:1,isStatic:true} );
	World.add(myworld, bottombody);
  
//	Engine.run(myengine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(myengine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rectMode(CENTER);
  fill("white");
  //rect(ground.position.x,ground.position.y,width,10);
  fill("red");
  rect(leftbody.position.x,leftbody.position.y,20,100);
  rect(rightbody.position.x,rightbody.position.y,20,100);
  rect(bottombody.position.x,bottombody.position.y,200,20);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+5;
	translation={x:5,y:0}
    Matter.Body.translate(packageBody, translation)
	
	 }

 if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-5;
	translation={x:-5,y:0}
    Matter.Body.translate(packageBody, translation)
	 }

 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



