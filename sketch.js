function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(250,193,0);
  randomSeed(0);

  var x, y;
  var delta = 30;
  var ellipseSize = map(mouseX, 0, windowWidth/3,15,5);
  var ellipseOpacity = map(mouseY, 0, windowHeight, 255, 0);
  var whiteSize;

  for (x=0; x<windowWidth; x+=delta){
    for (y=0; y<windowHeight; y+=delta/2) {
      
      noStroke();
      fill(0,ellipseOpacity);
      ellipse(x, y, ellipseSize, ellipseSize);
        
          
      }
    }
    

  whiteSize = 300;

  noStroke();
  fill(255);
  rectMode(CENTER);
  //ellipseMode(CENTER);
  //ellipse(windowWidth/2 - 200, windowHeight/2, whiteSize, whiteSize);
  //ellipse(windowWidth/2 + 200, windowHeight/2, whiteSize, whiteSize);
  rect(windowWidth/2, windowHeight/2 - 20, 900, 200);

  fill(0);
  textStyle(BOLD);
  textSize(70);
  text('INTO KUSAMA', windowWidth/2, windowHeight/2);
  textAlign(CENTER);
}
