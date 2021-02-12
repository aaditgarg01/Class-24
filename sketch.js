const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2,box3,box4;
var ground;
var pig1,pig2,log1,log2,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,50,50);
box4=new Box(920,240,50,50);
ground = new Ground(600,height,1200,20)
pig1=new Pig(810,350)
pig2=new Pig(810,220)
log1 = new Log(810,260,300,PI);
log2 = new Log(760,120,150,PI/5)    
log3 = new Log(870,120,150,-PI/5)   
log4 = new Log(810,180,300,PI)   
bird1 = new Bird(48,52)
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    ground.display()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
    pig1.display()
    pig2.display()
    bird1.display()      
}