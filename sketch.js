const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground1;
var ground2;






function setup() {
  createCanvas(800,400);
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    ground1 = new Ground(600,10,1200,20);
  
}

function draw() {
  background(255,255,255);  
ground1.display();
}