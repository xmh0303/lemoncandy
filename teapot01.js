let teapot;
let angle = 0;
let pattern;
let bamboo;
let canvasX = 1200;
let canvasY = 800;
let zoomSlider;
let sliderX = canvasX - 1170;
// let sliderText;

let r, g, b;
let rSlider;
let gSlider;
let bSlider;

function preload() {
   // pattern = loadImage('src/pattern01.png');
   // bamboo = loadImage('src/bamboo.jpg');
    teapot = loadModel('teapot.obj');
}

function setup() {
    createCanvas(canvasX, canvasY, WEBGL);

    zoomSlider = createSlider(PI/120, PI/6, PI/30, PI/240);
    zoomSlider.position(sliderX, 10);
    zoomSlider.style('width', '300px');

    fill(0);

    graphics = createGraphics(canvasX, canvasY);
    graphics.background(230);
    graphicColor();

    // sliderText = createGraphics(canvasX, canvasY)
}


function draw() {
    background(190, 150, 10);
    
    graphicColorVal();
    graphics.fill(r,g,b);
    graphics.noStroke();
    graphics.ellipse(mouseX, mouseY, 30, 30);

    // sliderText.fill(0);
    // sliderText.text('zoom', canvasX/2 - 150 - 20, 10);
    

    pointLight(255, 255, 255, 200, 0, 300);
    normalMaterial();

    let sliderVal = zoomSlider.value();
    // let fov = map(mouseX, 0, width, PI/60, PI/6); //perspective가 0도에서 180도 까지 왔다갔다 함.
    let cameraZ = (height/2) / tan((PI/3)/2);
    perspective(sliderVal, width/height, cameraZ/10, cameraZ*10);
    // console.log('slider value', sliderVal);

    push();
    rotateX(PI/2 +map(mouseY, 0, height, -PI/4, PI/4));
    rotateY(0);
    rotateZ(angle);

    texture(graphics);
    model(teapot);
    pop();

    pointLight(255, 255, 255, 0, 200, 300);
    translate(0, 30, 0);
    rotateX(HALF_PI );
    plane(200, 400);
    ambientMaterial(255);
    texture(bamboo);

    // image(sliderText, canvasX, canvasY);
    angle += 0.02
}

function graphicColor () {
    rSlider = createSlider(0, 255, 200, 1);
    gSlider = createSlider(0, 255, 200, 1);
    bSlider = createSlider(0, 255, 200, 1);
    
    rSlider.position(sliderX, 60);
    rSlider.style('width', '300px');
    gSlider.position(sliderX, 75);
    gSlider.style('width', '300px');
    bSlider.position(sliderX, 90);
    bSlider.style('width', '300px');
}

function graphicColorVal () {
    r = rSlider.value();
    g = gSlider.value();
    b = bSlider.value();
}
