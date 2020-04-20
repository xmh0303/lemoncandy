var teapot;
var plant1;
var grass1;
var raptor1;
var cam;
var delta = 0;
var h = 0;
var t1 = "Press the Arrow Key to Spin.";
var t2= 'Press Enter/Space Key to Stop';

function preload() {
  // teapot = loadModel('src/teapot.obj');
  raptor1 = loadModel('raptor1.obj');
}

function setup() {
  createCanvas(windowWidth , windowHeight, WEBGL);
  colorMode(HSB);

}

function draw() {
  //**************** Basic Position ******************//
  translate(0, 200, 0);
  keyPressed();

  //**************** Color ******************//
  if(h > 360) {
    h = 0;
  } else if (h <=360) {
    h += 0.15;
    background(h, 70, 80);
  }

  scale(250);
  noStroke();
  console.log(h);

  //**************** Perspective ******************//
  rotateZ(PI);
  perspective(PI/4);

  //**************** Material & Light ******************//
  let locX = mouseX - windowHeight / 2;
  let locY = mouseY - windowWidth / 2;
  // ambientLight(10);
  pointLight(360-h, 100, 80, locX, locY, 500);
  directionalLight(360, 0, 100, 1);
  // ambientMaterial(255);
  specularMaterial(118, 80,57);
  shininess(10);

  //**************** Model ******************//
  model(raptor1);

  //**************** Plane ******************/
  push();
  rotateX(HALF_PI);
  fill(360, 0, 100);
  plane(2, 2);
  pop();

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    delta += PI/240;
  } else if (keyCode === LEFT_ARROW) {
    delta -= PI/240;
  } else if (keyCode === ENTER) {
    delta -= 0;
  } 
  rotateY(delta);

}
