function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  stroke(0);
  strokeWeight(1);
  
  var firstSq = color(255);
  var secondSq = color(50, 50, 130);
  var thirdSq = color(60);
  var fourthSq = color(250, 220, 70);
  
  //first square color
  fill(firstSq);
  rect(0, 0, windowWidth / 2, windowHeight / 2);
  //second square color
  fill(secondSq);
  rect(windowWidth / 2, 0, windowWidth, windowHeight / 2);
  //third square color
  fill(thirdSq);
  rect(0, windowHeight / 2, windowWidth / 2, windowHeight);
  //fourth square color
  fill(fourthSq);
  rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}

function draw() {
  

  var rectOver = false;
  var rectSize = 10;

  //**base background
  var firstSq = color(255);
  var secondSq = color(50, 50, 130);
  var thirdSq = color(60);
  var fourthSq = color(250, 220, 70);

  var firstLine = color(0);
  var secondLine = color(200, 0, 0);
  var thirdLine = color(255);
  var fourthLine = color(0, 0, 170);

  var firstStrk = 3;
  var secondStrk = 0;
  var thirdStrk = 10;
  var fourthStrk = 1;
  
  
  
  //** division lines
    stroke(0);
    strokeWeight(3);
    line(windowWidth/2,windowHeight,windowWidth/2, 0);
    line(0,windowHeight/2, windowWidth, windowHeight/2);
  
  //** painting
  frameRate(120);
  if (mouseX<width/2){
    if(mouseY<height/2){
      
      //**the first square = normal black stroke
        if(mouseIsPressed){
          stroke(firstLine);
          strokeWeight(firstStrk);
          line(mouseX,mouseY, pmouseX, pmouseY);
      }}else {
    
      //**the third square = greyscale stroke
        if (mouseIsPressed){
          stroke(thirdLine);
          strokeWeight(thirdStrk);
          line(mouseX,mouseY, pmouseX, pmouseY);
          }
        }
      }
          
  if (mouseX>width/2){
    if(mouseY<height/2){
      
      //**the second square = contrasting color stroke
        if(mouseIsPressed){
          var size = random(3,10);
          noStroke();
          fill(secondLine);
          ellipse ( mouseX, mouseY, size,size);
      }}else {
    
      //**the fourth square = linear brush stroke
        if(mouseIsPressed){
          stroke(fourthLine);
          strokeWeight(fourthStrk);
          line(mouseX, mouseY, mouseX+random(-7,7), mouseY+random (-4,8));
          line(mouseX, mouseY, mouseX+random(-7,7), mouseY+random (-4,8));
          }
        }
      } 
      

}

