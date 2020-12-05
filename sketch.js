const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var lahariengine,lahariworld;
var ground,ball;

function setup() {
  createCanvas(400,400);

  lahariengine=Engine.create();
  lahariworld=lahariengine.world;

  var ballb={
   restitution:1
  }

  ball=Bodies.circle(200,100,20,ballb)
  World.add(lahariworld,ball)

  var options={
    isStatic: true,
    density: 0.5
  }



  ground=Bodies.rectangle(200,390,400,30,options);
  World.add(lahariworld,ground);
 console.log(ground)
 console.log(ground.type);
}

function draw() {
  background("black");  
  Engine.update(lahariengine);
  var pos=ground.position
  rectMode(CENTER);
  rect(pos.x,pos.y,400,30)

 

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
}