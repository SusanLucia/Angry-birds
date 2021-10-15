const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5;
var Cerdo1,Cerdo2;
var biga1,biga2,biga3,biga4;
var pajarito1;
var plataforma;
var log;
var liga1;
var estadodejuego = "resortera";
var fondoImg;
var fondo="sprites/bg.jpg";
function preload(){
cambiodefondo();

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    Cerdo1 = new Cerdito(810,200);
    Cerdo2 = new Cerdito(810,350);
    biga1 = new Biga(810,260,300,PI/2);
    biga2 = new Biga(810,180,300,PI/2);
    biga3 = new Biga(720,120,150,PI/7);
    biga4 = new Biga(890,120,150,-PI/7);
    pajarito1 = new Pajarito(200,50);
    plataforma = new Ground(150,305,300,170);
    //log = new Biga (230,152,75,PI/2);
    liga = new Liga(pajarito1.body,{x:200,y:50});
    
//PI/Angulo en 180 grados

}

function draw(){
    background(fondo);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    Cerdo1.display();
    Cerdo2.display();
    biga1.display();
    biga2.display();
    biga3.display();
    biga4.display();
    pajarito1.display();
    plataforma.display();
    //log.display();
    liga.display();
    
}
function mouseDragged(){
if(estadodejuego!=="lanzado"){
Matter.Body.setPosition(pajarito1.body,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
liga.fly();
estadodejuego="lanzado";
}
function keyPressed(){
if (keyCode===32){
  liga.adjunto(pajarito1.body);

}
}
 async function cambiodefondo(){
  var respuesta = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var respuestaJson = await respuesta.json();
  var datetime = respuestaJson.datetime;
  var hours = datetime.slice(11,13);
  if(hours>=06&&hours<=17){
  fondo = "sprites/bg.jpg";
  }
  else{
  fondo = "sprites/bg2.jpg";}
  fondoImg = loadImage(fondo);
  console.log(fondoImg);
}



//async = funcion asincronica
//await = Esperar 
//slice = para ingresar 
