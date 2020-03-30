let angle = 0;
let kitten;
let cam;
let graphics;
let love;
let teapot;

function preload() {
    kitten = loadImage('src/300.jpg');
    teapot = loadModel('src/teapot.obj');
}


function setup() {
    createCanvas(800, 500, WEBGL);
    // cam  = createCapture(VIDEO); 
    // cam.size(320,240);
    // cam.hide();

    graphics = createGraphics(200, 200);
    graphics.background(255);

    love = createGraphics(200, 200);
    love.background(255); //the background of a graphic is default transparent.
    love.noStroke();
    love.fill(0);
    love.textAlign(CENTER);
    love.textSize(50);
    love.text('LOVE', 100, 100);

}

function draw(){
    background(0);
    graphics.ellipse(mouseX, mouseY, 10, 10);

    //**********CAMERA**********//
    // // let camX = map(mouseX, 0, width, -200, 200);
    // let camX = random(-5, 5);
    // let camY = random(-5, 5);
    // let camZ = random(-5, 5);
    // camera(camX, camY, camZ + (height/2) / tan(PI/6), camX, camY, camZ, 0, 1, 0);

    //***********Perspective***********//
    // let fov = map(mouseX, 0, width, 0, PI); //perspective가 0도에서 180도 까지 왔다갔다 함.
    // let cameraZ = (height/2) / tan((PI/3)/2);
    // perspective(fov, width/height, cameraZ/10, cameraZ*10);  //the last two numbers are the clipping plane(어디까지 보여지는 지)

    pointLight(255, 255, 255, -200, 0, 300);
    noStroke();
    // fill(250, 70, 80);
    rotateX(angle);
    rotateY(angle * 0.7);
    rotateZ(angle * 1.3);
    texture(love);
    // box(150);
    // model(teapot); //When importing a model, you have to find it's own internal (0,0) coordinate.


    //*************directional light***************//
    // let  dx = -(mouseX - width/2);
    // let  dy = -(mouseY - height/2);
    // let  v = createVector(dx, dy, 0); 
    // v.normalize();
    // directionalLight(255, 255, 255, v);  // -1이라고 하는 이유가 벡터의 방향성만 필요하기 때문.
    //light that has direction but is infinately far away. 
    //Only have the direction of the light


    //*********other lights***********//
    // pointLight(0, 0, 255, -200, 0, 300);
    // pointLight(255, 0, 0, 200, 0, 300);
    // ambientLight(255, 100, 100);

    //translate(mouseX - width/2, mouseY - height/2); // rotate하기 전에 해야함
    //translate(0, 0, mouseX); // z축을 따라 커졌다 작아졌다

    
    //******************Creating a rotating cube cam**********************//
    // push(); // use push();, and pop(); so the rotate doesn't effect the other 3d objects
    // rotateX(angle);
    // rotateY(angle*0.03);

    // //************Materials************//
    // // ambientMaterial(255); //ambient material relfects light/ it needs light.
    // // normalMaterial();
    // texture(cam);

    // box(100); //w, h, depth
    // // torus(100, 10);
    // // torus(100, 25);
    // pop();

    // translate(0, 200);
    // rotateX(HALF_PI );
    // plane(600,240);
    // ambientMaterial(255);
    // // texture(cam);

    //****************************************//


    //*******************Testing Ortho / Duplicating Cubes*********************//
    // // ortho(); // Create a flattened 3D.
    // pointLight(255, 255, 255, 0, -200, 400);
    // for(let x = -200; x < 200; x += 50){
    //     push();
    //     translate(x, 0, x-200);
    //     rotateX(angle);
    //     rotateY(angle);
    //     rotateZ(angle);
    //     noStroke();
    //     ambientMaterial(255);
    //     box(50);
    //     pop();
    // }
    //****************************************//

    angle += 0.02;
}