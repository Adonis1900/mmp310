/*
Character Designer
user interface
10.16.19
*/

var catX = 100;
var catY = 50;

function setup(){
    createCanvas(windowWidth, 600);
    character();
    
    create("catX");
    var greySlider = createSlider (0,255, catX, catY);
}

function character(){
    background('black');
    
     //Character: Cat.
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

    
    
}
