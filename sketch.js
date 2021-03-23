
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var g,t,s,m1,m2,m3,m4,m5,boy,b,str;
function preload()
{
	b=loadImage("boy.png");
	t=loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	g=new Ground(600,750,1200,20);
	//t=new tree(900,425,500,700);
	s=new stone(200,600,40,40);
	m1=new mango(900,200,70,70);
	m2=new mango(850,300,70,70);
	m3=new mango(800,250,70,70);
	m4=new mango(1000,350,70,70);
	m5=new mango(1000,250,70,70);
	m6=new mango(780,380,70,70);
	str=new string(s.body,{x:210,y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  textSize(25);
  text("Press Space to get one more chance to Play!!",50 ,50);
  image(b,170,520,200,300);
  image(t,650,70,500,700);
  g.display();
 // t.display();
  s.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  str.display();
  Collide(s,m1);
  Collide(s,m2);
  Collide(s,m3);
  Collide(s,m4);
  Collide(s,m5);
  Collide(s,m6);
 
}
function Collide(sto,mang)
{
	mangPos=mang.body.position;
	stoPos=sto.body.position;
	var d=dist(stoPos.x,stoPos.y,mangPos.x,mangPos.y);
	if(d<=mang.width+sto.width)
	{
		Matter.Body.setStatic(mang.body,false);
	}
}

function mouseDragged()
{
  Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
  str.fly();
}
function keyPressed(){
  if(keyCode===32)
  {
	Matter.Body.setPosition(s.body,{x:210,y:600});
    str.attach(s.body);
  }
}
