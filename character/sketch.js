/*
Character Designer
user interface
10.16.19
*/

var catX; // 900
var catY = 300; // 200
var catEyes= 20;

function setup() {
    createCanvas(windowWidth, 600);
    catX = width / 2;
   
    character();

    createP("catX");

    var greySlider = createSlider (0,255, catX, catY);
    greySlider.input(updateGrey)
    
    var catEyeSlider= createSlider(0,20,catEyes);
    catEyeSlider.input (updateEyes)
    
    
}
function updateGrey(){
    catX=this.value();
    character();
    
}

function updateEyes(){
    catEyes= this.value();
    character();
}

function character() {
    background('black');

    //Character 2: Alien
    strokeWeight(10.0);
    fill('grey')
    ellipse(catX, catY, 200, 200);
   
    fill('white');
    ellipse(catX, catY - 50, 60, 30);  //Top eye
    ellipse(catX - 50, catY, 60, 30); //Left eye
    ellipse(catX + 50, catY, 60, 30);  //Right eye
    
    fill('grey')
    triangle(catX - 90, catY - 50,
        catX - 40, catY - 90,
        catX - 90, catY - 100);

    triangle(catX + 90, catY - 50,
        catX + 40, catY - 90,
        catX + 90, catY - 100);

    //
    fill('black')
    ellipse(catX + catEyes - 60, catY, 20, 20);
    ellipse(catX + 40 + catEyes, catY, 20, 20);
    ellipse(catX - 10 + catEyes, catY - 50, 20, 20);

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
    

}
