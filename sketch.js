var path,pathImg;
var boy,boyAnimation;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boyAnimation=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
 path.velocityY = 4 ;
  boy =createSprite(120,340,30,30);
 boy.addAnimation("running",boyAnimation);
 boy.scale= 0.08;
 }

function draw() {
  background(0);
  boy.x=World.mouseX;
 drawSprites();
 if(path.y > 400){
  path.y = 200;
 }
}




