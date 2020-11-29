const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var object
var ground
var ball
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  object=Bodies.rectangle(103,208,50,68)
  World.add(world,object)
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400, 380,800,20,options)
  World.add(world,ground)
  ball=Bodies.circle(400,200,20)
  World.add(world,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,68)
  rect(ground.position.x,ground.position.y,800,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}