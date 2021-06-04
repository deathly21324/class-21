const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bu1,bu2

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);


  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(100,100,20,ball_options)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  bu1=createImg("right.png")
  bu1.position(200,30)
  bu1.mouseClicked(hForce)
  bu1.size(50,50)

  bu2=createImg("up.png")
  bu2.position(100,30)
  bu2.mouseClicked(vForce)
  bu2.size(50,50)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
}

function hForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0})
}                                 
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1})
  }