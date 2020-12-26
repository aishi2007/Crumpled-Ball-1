const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,b1,b2,b3;
var ground,groundSprite;
var ballSprite;
function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;
 
	var b_options={isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2}
	ball=Bodies.circle(200,100,20, b_options)
	World.add(world, ball);
	//Create the Bodies Here.
	ground = Bodies.rectangle(450, 380, 1200, 20 , {isStatic:true} );
	 World.add(world, ground);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  b1 = Bodies.rectangle(550, 331, 20, 80 , {isStatic:true} );
  World.add(world, b1);

  b1Sprite=createSprite(550,331,20,80)
  b1Sprite.shapeColor=color("white");
  b2 = Bodies.rectangle(620,361,120,20, {isStatic:true} );
  World.add(world, b2);

  b2Sprite=createSprite(620,361,120,20)
  b2Sprite.shapeColor=color("white");

  b3 = Bodies.rectangle(680,331,20,80, {isStatic:true} );
  World.add(world, b3);

  b3Sprite=createSprite(680,331,20,80)
  b3Sprite.shapeColor=color("white");
	Engine.run(engine);

}


function draw() {
	background("black");  
	Engine.update(engine);
  
	rectMode(CENTER);
	fill("green");
	
	rect(ground.position.x, ground.position.y, 1200, 20);
	
	fill("white");
	ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y,20,20);
  
	drawSprites();
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});
}
}