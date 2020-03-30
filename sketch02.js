let angle = 0;
let cam;


function setup() {
    createCanvas(800, 500, WEBGL);
    cam  = createCapture(VIDEO); 
    cam.size(320,240);
    cam.hide();
}

function draw(){
    background(51);

    //**********CAMERA**********//
    // // let camX = map(mouseX, 0, width, -200, 200);
    // let camX = random(-5, 5);
    // let camY = random(-5, 5);
    // let camZ = random(-5, 5);
    let camX = 0;
    camera(camX, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);

    noStroke();

    push(); // use push();, and pop(); so the rotate doesn't effect the other 3d objects
    rotateX(angle);
    rotateY(angle*0.3);
    texture(cam);
    box(150); //w, h, depth
    pop();


    translate(0, 200);
    rotateX(HALF_PI );
    plane(600,240);
    ambientMaterial(255);
    texture(cam);

    angle += 0.02;
}