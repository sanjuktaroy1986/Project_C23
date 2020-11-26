const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG,packageIMG;
var packageBody,ground;
var myengine,myworld;
var leftBody,rightBody,bottomBody;
var hx=400;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	myengine = Engine.create();
	myworld = myengine.world;

	//Create a Ground
	ground = Bodies.rectangle(400, 580, width, 20 , {isStatic:true} );
 	World.add(myworld, ground);
  
	packageBody = Bodies.rectangle(400 , 200 , 40 , 40, {restitution:1, isStatic:true});
  World.add(myworld, packageBody);
  
  leftBody = Bodies.rectangle(450, 520, 20, 100 , {isStatic:true} );
  World.add(myworld, leftBody);

  rightBody = Bodies.rectangle(650, 520, 20, 100 , {isStatic:true} );
  World.add(myworld, rightBody);

  bottomBody = Bodies.rectangle(550, 560, 200, 20 , {isStatic:true} );
  World.add(myworld, bottomBody);
	
}

function draw() {
	
  background(0);
  Engine.update(myengine);
  
  //draw ground
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20);
  
  //draw package
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,40,40)
 
  //draw helicopter
  imageMode(CENTER);
  image(helicopterIMG,hx,200,250,150);

  //draw leftBody,rightBody,bottomBody
  fill("red")
  rect(leftBody.position.x,leftBody.position.y,20,100);
  rect(rightBody.position.x,rightBody.position.y,20,100);
  noStroke();
  rect(bottomBody.position.x,bottomBody.position.y,200,20);


  //move packageBody & helicopter right
  if(keyDown("RIGHT_ARROW")){
    Body.translate(packageBody,{x:5,y:0});
    hx=hx+5;
  }
  
  //move packageBody & helicopter left
  if(keyDown("LEFT_ARROW")){
    Body.translate(packageBody,{x:-5,y:0})
    hx=hx-5;
  }

  //make packageBody fall down
  if(keyDown("DOWN_ARROW")){
	Body.setStatic(packageBody,false);
  }

  }




