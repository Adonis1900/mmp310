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

var scene = "nightSky"

function mousePressed() {
    if (scene == "nightSky") {
        scene = "partyroom";
    } else if (scene == "partyroom") {
        scene = "classroom";

    } else if (scene == "classroom") {
        scene = "nightSky";
    }
}


function setup() {
    createCanvas(windowWidth, 700);
}

function draw() {

    background('darkBlue');
    
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



    if (scene == "nightSky") {
        background('#191970');

        //Character 1: Jared
        fill('tan');
        ellipse(x, y, faceSize);
        stroke('black');
        fill('white')
        ellipse(50, 180, 30, 50);
        fill('green')
        ellipse(50, 190, 20, 30);
        fill('white')
        ellipse(150, 180, 30, 50);
        fill('green')
        ellipse(150, 190, 20, 30);
        //Character 2: Alien
        fill('grey')
        ellipse(catX, catY, 200, 200);

        fill('white')
        ellipse(900, 150, 60, 30);
        fill('white')
        ellipse(850, 200, 60, 30);
        fill('white')
        ellipse(950, 200, 60, 30);
        fill('black')
        ellipse();
        fill('black');
        fill('grey')
        triangle(catX - 90, catY - 50, catX - 40, catY - 90, catX - 90, catY - 100);
        triangle(catX + 90, catY - 50, catX + 40, catY - 90, catX + 90, catY - 100);
        fill('black')
        ellipse(catX - 60, catY, 20, 20);
        ellipse(catX + 40, catY, 20, 20);
        ellipse(catX - 10, catY - 50, 20, 20);


        //Jared's nose
        noFill();
        strokeWeight(10.0);
        strokeJoin(ROUND);
        beginShape();
        vertex(x, y + 10);
        vertex(x + 20, y - 10);
        vertex(x, y - 20);
        endShape();

        //Jared mouth
        arc(100, 240, 50, 50, 50, PI + QUARTER_PI);

        //Cat aka Aliens nose.
        fill('pink')
        triangle(
            catX - 40, 29 + catY,
            40 + catX, 29 + catY,
            catX, 50 + catY
        );

        //Cat Mouth.
        noFill()
        arc(catX - 25, catY + 60, 50, 40, 50, PI + QUARTER_PI);
        arc(catX + 25, catY + 60, 50, 40, 50, PI + QUARTER_PI);


        fill("white");
        ellipse(random(width), random(height), 5, 5);
        
        fill("white");
        textSize(50);
        text("welcome to the stars!",300,250);
        text("Jared meets party cat for the first time!", 400, 400)
        
        
        // Scene#2

    } else if (scene == "partyroom") {
        background('#FF69B4');

        //Character 1: Jared
        fill('tan');
        ellipse(x, y, faceSize);
        stroke('black');
        fill('white')
        ellipse(50, 180, 30, 50);
        fill('green')
        ellipse(50, 190, 20, 30);
        fill('white')
        ellipse(150, 180, 30, 50);
        fill('green')
        ellipse(150, 190, 20, 30);
        //Character 2: Alien
        fill('grey')
        ellipse(catX, catY, 200, 200);

        fill('white')
        ellipse(900, 150, 60, 30);
        fill('white')
        ellipse(850, 200, 60, 30);
        fill('white')
        ellipse(950, 200, 60, 30);
        fill('black')
        ellipse();
        fill('black');
        fill('grey')
        triangle(catX - 90, catY - 50,
                 catX - 40, catY - 90,
                 catX - 90, catY - 100);
        
        triangle(catX + 90, catY - 50,
                 catX + 40, catY - 90,
                 catX + 90, catY - 100);
        
        fill('black')
        ellipse(catX - 60, catY, 20, 20);
        ellipse(catX + 40, catY, 20, 20);
        ellipse(catX - 10, catY - 50, 20, 20);
        
        //Jared's nose
        noFill();
        strokeWeight(10.0);
        strokeJoin(ROUND);
        beginShape();
        vertex(x, y + 10);
        vertex(x + 20, y - 10);
        vertex(x, y - 20);
        endShape();

        //Jared mouth
        arc(100, 240, 50, 50, 50, PI + QUARTER_PI);

        //Cat aka Aliens nose.
        fill('pink')
        triangle(
            catX - 40, 29 + catY,
            40 + catX, 29 + catY,
            catX, 50 + catY
        );

        //Cat Mouth.
        noFill()
        arc(catX - 25, catY + 60, 50, 40, 50, PI + QUARTER_PI);
        arc(catX + 25, catY + 60, 50, 40, 50, PI + QUARTER_PI);


        fill("white");
        ellipse(random(width), random(height), 5, 5);
        fill('black');
        textSize(50);
        
        fill("white");
        textSize(50);
        text("Lets Party in the pink room!",200,250);
        text("Jared and party cat begin to party and Dance in the pink room" , 100, 400);
        
    } else if (scene == "classroom") {
        background('green');
        
        //Character 1: Jared
        fill('tan');
        ellipse(x, y, faceSize);
        stroke('black');
        fill('white')
        ellipse(50, 180, 30, 50);
        fill('green')
        ellipse(50, 190, 20, 30);
        fill('white')
        ellipse(150, 180, 30, 50);
        fill('green')
        ellipse(150, 190, 20, 30);
        //Character 2: Alien
        fill('grey')
        ellipse(catX, catY, 200, 200);

        fill('white')
        ellipse(900, 150, 60, 30);
        fill('white')
        ellipse(850, 200, 60, 30);
        fill('white')
        ellipse(950, 200, 60, 30);
        fill('black')
        ellipse();
        fill('black');
        fill('grey')
        triangle(catX - 90, catY - 50,
                 catX - 40, catY - 90,
                 catX - 90, catY - 100);
        
        triangle(catX + 90, catY - 50,
                 catX + 40, catY - 90,
                 catX + 90, catY - 100);
        
        fill('black')
        ellipse(catX - 60, catY, 20, 20);
        ellipse(catX + 40, catY, 20, 20);
        ellipse(catX - 10, catY - 50, 20, 20);
        
        //Jared's nose
        noFill();
        strokeWeight(10.0);
        strokeJoin(ROUND);
        beginShape();
        vertex(x, y + 10);
        vertex(x + 20, y - 10);
        vertex(x, y - 20);
        endShape();

        //Jared mouth
        arc(100, 240, 50, 50, 50, PI + QUARTER_PI);

        //Cat aka Aliens nose.
        fill('pink')
        triangle(
            catX - 40, 29 + catY,
            40 + catX, 29 + catY,
            catX, 50 + catY
        );

        //Cat Mouth.
        noFill()
        arc(catX - 25, catY + 60, 50, 40, 50, PI + QUARTER_PI);
        arc(catX + 25, catY + 60, 50, 40, 50, PI + QUARTER_PI);


        fill("white");
        triangle(random(width), random(height), 20, 20);
        fill('black');
        textSize(50);
        

    }





}
