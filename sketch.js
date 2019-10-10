var fishes = [];
var leftfishes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 200; i++) {
    fishes[i] = new Fish();
    leftfishes[i] = new LeftFish();
  }
}

function draw() {
  
  background(0, 65, 161);

  for (i = 0; i < fishes.length; i++) {
    fishes[i].display();
    fishes[i].move();
    leftfishes[i].leftdisplay();
    leftfishes[i].leftmove();
  }
}


function Fish() {

  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.vx = random(-1,1);
  this.vy = random(-0.5,0.5);
  this.display = function() {
    var fishSize = 16;
    var fishFin = fishSize / 2;
    var fishEye = fishSize / 8
    var fishEyeSize = 2;
    stroke(255);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, fishSize, fishSize);
    triangle(this.x + fishSize, this.y + fishFin,
      this.x + fishFin, this.y,
      this.x + fishSize, this.y - fishFin);
    ellipse(this.x - fishEye, this.y - fishEye, 
            fishEyeSize, fishEyeSize)
  };
  this.move = function() {
    
    this.x += this.vx;
    this.y += this.vy; 
    
    if (this.x > windowWidth || this.x < 0) {
      this.vx = - this.vx;
    }
    if (this.y > windowHeight || this.y < 0) {
      this.vy = - this.vx;
    }
    
    if (mouseIsPressed) {
      var xdif = abs(this.x-mouseX);
      var ydif = abs(this.y-mouseY);
        if ( xdif < 50 + random(-20, 20)) {
        if ( ydif < 50 + random(-20, 20)) {
          this.y = this.y + random(-30,30) ;
          this.x = this.x + random(-30,30) ;
        }
      }
    }
  };
}


function LeftFish() {

  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.vx = random(-2,1);
  this.vy = random(-1,2);
  this.leftdisplay = function() {
    var fishSize = 12;
    var fishFin = fishSize / 2;
    var fishEye = fishSize / 8
    var fishEyeSize = 1;
    stroke(255,233,143);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, fishSize, fishSize);
    triangle(this.x - fishSize, this.y - fishFin,
      this.x - fishFin, this.y,
      this.x - fishSize, this.y + fishFin);
    ellipse(this.x + fishEye, this.y - fishEye, 
            fishEyeSize, fishEyeSize)
  };
  this.leftmove = function() {
    
    this.x += this.vx;
    this.y += this.vy; 
    
    if (this.x > windowWidth || this.x < 0) {
      this.vx = - this.vx;
    }
    if (this.y > windowHeight || this.y < 0) {
      this.vy = - this.vx;
    }
    
    if (mouseIsPressed) {
      var xdif = abs(this.x-mouseX);
      var ydif = abs(this.y-mouseY);
        if ( xdif < 50 + random(-20, 20)) {
        if ( ydif < 50 + random(-20, 20)) {
          this.y = this.y + random(-15,15) ;
          this.x = this.x + random(-15,15) ;
        }
      }
    }
  };
}