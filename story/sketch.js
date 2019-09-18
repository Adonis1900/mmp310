/*
story sketch
9.5.2019
Tommy Rosemond
mmp310
*/

var x = 100;
var y = 200;
var faceSize = 200;
var eyeSize = 50;
/* Characters Name is Jared*/

var catX = 900;
var catY = 200;

var greeting = "Wassup!";

function setup() {
    createCanvas(windowWidth, 600);
    background('purple');

    fill('tan');
    ellipse(x, y, faceSize);
    fill('black');
    stroke('white');
    fill('white')
    ellipse(50, 180, 30, 50);
    fill('black')
    ellipse(50, 190, 20, 30);
    fill('white')
    ellipse(150, 180, 30, 50);
    fill('black')
    ellipse(150, 190, 20, 30);

    fill('blue')    
    ellipse(catX,catY,200,200);
    fill('white')
    ellipse(900,150,60,30);
    fill('white')
    ellipse(850,200,60,30);
    fill('white')
    ellipse(950,200,60,30);
    fill('black')
    ellipse();
    fill('black')
   
    fill('blue')
    triangle(900, 60, 58, 20, 86, 75);
    
    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(catX, catY - 10);
    vertex(catX - 20, catY - 0);
    vertex(catX, catY + 40);
    endShape();


    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(x, y + 10);
    vertex(x + 20, y - 10);
    vertex(x, y - 20);
    endShape();

    arc(100, 240, 50, 50, 50, PI + QUARTER_PI);

    fill('black')
    textSize(50);
    text(greeting, 400, y);

    // draw a spinning box
    // with width, height and depth of 50
    function setup() {
        createCanvas(100, 100, WEBGL);
        fill('yellow')
    }

    function draw() {
        background('indigo');
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        box(10);
        
    }
}
