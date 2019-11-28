var t = "love is everything";
var amount = 800;
var ta = t.split(" ");
var v = 0;
var a = 0;
var b = 255;
var length;
var textSz = 60;
var song;

var isGoUp = true;

function preload() {
  song = loadSound("love-is-everything.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  for (i = 0; i <= ta.length; i++) {
    ta[i];
  }
  song.setVolume(1);
  song.play();
}

function draw() {
  length = textWidth(ta[v]);
  background(a, 60, 20);
  Words();
  //WordChange();
  WordSizeChange();
  ColorFade();
}

function ColorFade() {
  if (isGoUp) {
    a += 5;
    if (a > 255) {
      isGoUp = false;
    }
  } else {
    a -= 5;
    if (a < 0) {
      isGoUp = true;
    }
  }

  if (isGoUp) {
    b -= 5;
    if (b > 255) {
      isGoUp = false;
    }
  } else {
    b += 5;
    if (b < 0) {
      isGoUp = true;
    }
  }
}

function Words() {
  for (x = -30; x < width; x += length + textSz * 0.2) {
    for (y = -30; y < height * 1.5; y += textSz) {
      fill(b, 60, 20, random(100, 255));
      textSize(textSz);
      textAlign(LEFT);
      text(ta[v], x, y);
    }
  }
}

function mousePressed() {
  v = v + 1;
  if (v == ta.length) {
    v = 0;
  }
}

function WordSizeChange() {
  if (keyIsPressed == true) {
    if (keyCode == UP_ARROW) {
      textSz += 1;
    } else if (keyCode == DOWN_ARROW) {
      textSz += -1;
    }
  }
}
