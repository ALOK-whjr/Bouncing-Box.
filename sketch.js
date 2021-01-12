var box,surface1,surface2,surface3,surface4;
var music,edges ,redColor,greenColor,yellowColor,blueColor;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(400,400);
  
  redColor = 'red';
  yellowColor = 'yellow';
  blueColor = 'blue';
  greenColor = 'green';
  
  //create 4 different surfaces
  surface1 = createSprite(50,380,100,20);
  surface1.shapeColor = 'red';

  surface2 = createSprite(150,380,100,20);
  surface2.shapeColor = 'green';
    
  surface3 = createSprite(250,380,100,20);
  surface3.shapeColor = 'blue';
    
  surface4 = createSprite(350,380,100,20);
  surface4.shapeColor = 'yellow';

  //create box sprite and give velocity
  box = createSprite(random(20,350),random(20,350),30,30);
  box.shapeColor = 'white';
  box.velocityX = 5;
  box.velocityY = 6;

}

function draw() {
  background(rgb(169,169,169));
  music.play();
    
  //create edgeSprite
  edges = createEdgeSprites();
  
  //add condition to check if box is touching surface and make it sound
  
  if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = 'red';  
    music.stop();   
  }
  if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = 'green';  
    music.stop();    
  }
  if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = 'blue';  
    music.stop();    
  }
  if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = 'yellow';  
    music.stop();    
  }
    
  //make box bounce off every sprite

  box.bounceOff(edges);
  box.bounceOff(surface1);
  box.bounceOff(surface2);
  box.bounceOff(surface3);
  box.bounceOff(surface4);

  drawSprites();
}
