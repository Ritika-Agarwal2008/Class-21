var rect1,rect2;
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor ="green"
  rect1.debug = true
  rect2 = createSprite(400, 200, 50, 50);
  rect2.shapeColor ="green"
  rect2.debug =true
  rect2.velocityX=-3
  rect3 = createSprite(100, 200, 50, 50);
  rect3.shapeColor ="green"
  rect3.velocityX=3
  rect3.debug =true

}

function draw() {
  background(0);
  rect1.x = mouseX
  rect1.y = mouseY
  
  if( isTouching(rect1,rect2)){

  
    rect1.shapeColor ="red"
    rect2.shapeColor ="red"
  }
  else if( isTouching(rect1,rect3)){

  
    rect1.shapeColor ="red"
    rect3.shapeColor ="red"
  }
  else{
    rect1.shapeColor ="green"
    rect2.shapeColor ="green"
    rect3.shapeColor ="green"
  }
  drawSprites();

}
