var bullet,wall
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,20)
  bullet.shapeColor="white"
  bullet.velocityX=speed
  wall=createSprite(1500,200,thickness,200)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background("grey"); 
  if(bullet.isTouching(wall)){
    bullet.velocityX=0
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>10){
      bullet.shapeColor=color(255,0,0)
    }
    else{
      bullet.shapeColor=color(0,255,0)
    }
  } 
  drawSprites();
}