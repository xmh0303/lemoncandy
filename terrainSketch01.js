let checkbox;
let roty = 0;
let rotx = 0;
let boxNumber = 15;
let boxw = 50;
let boxh = 50;
let boxd = 50;
let boxt = 0; //space between the boxes
let d;
var boxes = [];
var noiseValue = 30;
var switchClick;
var pg;
var terrainDepth = 3;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(RGB, 1);
    // pg = createGraphics(windowWidth, windowHeight);

    for (i = 0; i < boxNumber; i++) {
        boxes[i] = [];
        for(j = 0; j < boxNumber; j++) {
            boxes[i][j] = new Box();
        }
      }

    switchClick = false;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    boxNumber += 1;
  } else if (keyCode === DOWN_ARROW) {
    boxNumber -= 1;
  } else if (keyCode === RIGHT_ARROW) {
    noiseValue += 10;
  } else if (keyCode === LEFT_ARROW) {
    noiseValue -= 10;
  }
  return false; // prevent default
}

function draw() {
    lights();
    directionalLight(1, 1, 1, 1, 1, 0);
    noStroke();
    // pg.textSize(32);
    // pg.fill(0);
    // pg.text('Press the up/down arrow key to change the terrain size', 0, 0);

    if (mouseIsPressed) {
        background(0.05);
        stroke(0);
        fill(0.38);
    } else {
        background(0.35, 0.4, 0.7);
        fill(0.05, 0.15, 0.07);
    }

    for (i = 0; i < boxNumber; i++) {
        for(j = 0; j < boxNumber; j++) {
        boxes[i][j].display();
        boxes[i][j].terrain();
      }
    }

    roty = map(mouseX, 0, windowWidth, radians(0), radians(360));
    rotx = map(mouseY, 0, windowWidth, radians(0), radians(360));
}


function Box() {
    this.x = j * (boxw+boxt)
    this.y = i * (boxh+boxt)
    this.z = 0
    this.display = function() {
        push();
        rotateY(roty);
        rotateX(rotx);
        translate(- this.x, - this.y, this.z);
        for(terrainDepth = 0; terrainDepth < 3 ; terrainDepth++){
            push();
            translate(0, 0, - terrainDepth * boxd)
            box(boxw, boxh, boxd)
            pop();
        }
        pop();
        push();
        rotateY(roty);
        rotateX(rotx);
        translate(this.x, this.y, this.z);
        for(terrainDepth = 0; terrainDepth < 3 ; terrainDepth++){
            push();
            translate(0, 0, - terrainDepth * boxd)
            box(boxw, boxh, boxd)
            pop();
        }
        pop();
        push();
        rotateY(roty);
        rotateX(rotx);
        translate(this.x, - this.y, this.z);
        for(terrainDepth = 0; terrainDepth < 3 ; terrainDepth++){
            push();
            translate(0, 0, - terrainDepth * boxd)
            box(boxw, boxh, boxd)
            pop();
        }
        pop();
        push();
        rotateY(roty);
        rotateX(rotx);
        translate(- this.x, this.y, this.z);
        for(terrainDepth = 0; terrainDepth < 3 ; terrainDepth++){
            push();
            translate(0, 0, - terrainDepth * boxd)
            box(boxw, boxh, boxd)
            pop();
        }
        pop();
    }

    this.terrain = function () {
        if(mouseIsPressed) {
            if(switchClick == false){
                this.z = random(- noiseValue, noiseValue);
                switchClick = true;
            } else if (switchClick == true)
                this.z = 0;
                switchClick = false;
                console.log(switchClick);
        }
    }
}
