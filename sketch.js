let mic;
// Declare a scaling factor
let scale = 5;
// Declare a smooth factor
let smooth_factor = 0.25;
// Used for smoothing
let smoothed = 0;
var fires = [];
var smokes = [];
var numberFire = 50;
var numberSmoke = 50;

let img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn(); // open mic input
  mic.start();

  img = loadImage("wood.png");

  for (i = 0; i < numberFire; i++) {
    fires[i] = new Fire();
  }
  for (i = 0; i < numberSmoke; i++) {
    smokes[i] = new Smoke();
  }
}

function draw() {
  // smooth the rms data by smoothing factor
  // rms.analyze() return a value between 0 and 1. It's
  // scaled to height/2 and then multiplied by a scale factor

  let mag = mic.getLevel();
  smoothed = smoothed * (1 - smooth_factor) + mag * smooth_factor;
  let scaled = smoothed * (height / 2) * scale;

  background(70, 30, 10);
  image(
    img,
    (1 / 2) * windowWidth - 150,
    (3 / 4) * windowHeight,
    300,
    (1 / 4) * windowHeight
  );

  frameRate(50);

  let s = new Smoke();
  smokes.push(s);
  for (i = 0; i < smokes.length; i++) {
    smokes[i].smokedisplay();
    smokes[i].smokemove();
  }

  let p = new Fire();
  fires.push(p);
  for (i = 0; i < fires.length; i++) {
    fires[i].display((1 / 5) * scaled + 20);
    fires[i].move();
  }
}

class Fire {
  constructor() {
    this.spread = 80;
    this.x = random(
      windowWidth / 2 - this.spread,
      windowWidth / 2 + this.spread
    );
    this.y = random(windowHeight, windowHeight - 100);
    this.vx = random(-0.1, 0.1);
    this.vy = random(-3, 0);
  }

  display(scale) {
    this.scale = scale;

    // print("distance: " + distance);
    var distance = int(
      dist(this.x, this.y, windowWidth / 2, windowHeight - 100)
    );
    // print("opacity: " + opacity);
    this.opacity = map(distance, 0, windowHeight, 255, 0);
    var yellow = map(this.y / 2, 0, windowHeight / 8, 0, 40);
    this.fireSize =
      (1 / 40) * this.scale * map(distance, 0, windowHeight, 45, -5);

    noStroke();
    fill(250, yellow, 0, this.opacity - 50);
    triangle(
      this.x,
      this.y,
      this.x + this.fireSize,
      this.y,
      this.x + this.fireSize / 2,
      this.y - this.fireSize
    );
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (
      (this.x > (windowWidth * 4) / 5) |
        (this.x < windowWidth / 5) |
        (this.y < 0) &&
      (this.y > -(this.x - windowWidth / 2)) ^ (2 + windowHeight)
    ) {
      this.x = random(
        windowWidth / 2 - this.spread,
        windowWidth / 2 + this.spread
      );
      this.y = random(windowHeight, windowHeight - 100);
    }
  }
}

class Smoke {
  constructor() {
    this.x = windowWidth / 2;
    this.y = height - 60;
    this.vy = random(-3, 0);
    this.vx = random(-0.07, 0.07);
  }

  smokedisplay() {
    var distance = int(
      dist(this.x, this.y, windowWidth / 2, windowHeight - 100)
    );
    this.opacity = map(distance, 0, windowHeight, 20, 0);
    noStroke();
    fill(200, this.opacity);
    ellipse(this.x, this.y, 20, 20);
  }

  smokemove() {
    this.y += this.vy;
    this.x += this.vx;

    if (
      (this.x > (windowWidth * 4) / 5) |
        (this.x < windowWidth / 5) |
        (this.y < 0) &&
      (this.y > -(this.x - windowWidth / 2)) ^ (2 + windowHeight)
    ) {
      this.x = random(
        windowWidth / 2 - this.spread,
        windowWidth / 2 + this.spread
      );
      this.y = random(windowHeight, windowHeight - 100);
    }
  }
}
