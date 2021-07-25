var Background,backgroundIMG;
var astronaut;
var sleeping, brushing, bathing, eating, gymming;
var edgeTop, edgeBottom, edgeRight, edgeLeft;

function preload(){
backgroundIMG = loadImage("iss.png");
sleeping = loadAnimation("sleep.png");
brushing = loadAnimation("brush.png");
bathing = loadAnimation("bath1.png","bath2.png");
gymming = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
eating = loadAnimation("eat1.png","eat2.png","drink1.png","drink2.png");
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  Background = createSprite(400,200);
  Background.addImage(backgroundIMG);
  Background.scale = 0.2;

  astronaut = createSprite(400,230);
  astronaut.addAnimation("sleeping", sleeping);
  astronaut.scale = 0.1;
  astronaut.setCollider("circle",0,500,700);
  astronaut.debug = false;

  edgeTop = createSprite(400,3,800,2);
  edgeTop.visible = false;

  edgeBottom = createSprite(400,397,800,2);
  edgeBottom.visible = false;

  edgeLeft = createSprite(797,200,2,400);
  edgeLeft.visible = false;

  edgeRight = createSprite(3,200,2,400);
  edgeRight.visible = false;
}



function draw() {
  background(255,255,255); 

  astronaut.bounceOff(edgeTop);
  astronaut.bounceOff(edgeBottom);
  astronaut.bounceOff(edgeLeft);
  astronaut.bounceOff(edgeRight);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush", brushing);
    astronaut.changeAnimation("brush");
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath",bathing);
    astronaut.changeAnimation("bath");
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gymming);
    astronaut.changeAnimation("gym");
  }
  if(keyDown("left_ARROW")){
    astronaut.addAnimation("eat", eating);
    astronaut.changeAnimation("eat");
  }
  if(keyDown("M")){
    astronaut.velocityX = 4;
    astronaut.velocityY = 3;
  }
  
  drawSprites();
  stroke("white");
  fill("white");
  textSize(20);
    text("Instructions : ", 25,320);
  textSize(15);
    text("up arrow = brushing ", 25,335);
    text("down arrow = Gymming ", 20,350);
    text("left arrow = eating ", 25,365);
    text("right arrow = bathing , m kew = moving", 25,380);
}