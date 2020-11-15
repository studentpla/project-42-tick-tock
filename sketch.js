const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var hr,min,sec;
function setup() {
  engine = Engine.create();
  world = engine.world;
  hr = hour();
  min = minute();
  sec = second();
  secAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
strokeWeight(4);
line(0,0,100,0);

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}