const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var maxDrops = 100;
var drops = [];
var rand;


function preload(){
    back_img = loadImage("bg.gif");
}

function setup(){
    var canvas = createCanvas(1350,650);
    
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,450);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

}

function draw(){
    background(back_img);
    Engine.update(engine);

      umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxDrops; i++){
          drops[i].showDrop();
          drops[i].updateY();
          
      }


  
      drawSprites();
}   



