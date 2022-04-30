
var trex, trex_running
function preload(){ // run only once
  
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){ // run only once
  createCanvas(600,200)
  trex=createSprite(50,150,50,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.7

  
 
}

function draw(){    // keeps on running
  background("yellow")
  
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY= trex.velocityY+0.5

 drawSprites()
}
