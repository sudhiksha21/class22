const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,380,400,10,ground_options);
    World.add(world,ground);


var options={
    restitution : 0.5
}

   ball =Bodies.circle(100,100,20,options);
   World.add(world,ball);

   var option1={
       restitution : 0.5
   }
   ball2=Bodies.circle(300,100,30,option1);
   World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
   ellipse(ball2.position.x,ball2.position.y,30,30);
}