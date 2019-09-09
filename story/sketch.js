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


var greeting = "Wassup!";
function setup(){
    createCanvas(windowWidth,600);
    background('black');
    
    fill('tan');
    ellipse(x,y,faceSize);
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
   
    noFill();
strokeWeight(10.0);
strokeJoin(ROUND);
beginShape();
vertex(x,y+10);
vertex(x+20,y-10);
vertex(x,y-20);
endShape();
    
    arc(100, 240, 50, 50, 50, PI + QUARTER_PI);
    
    fill('red')
    textSize(50);
    text(greeting,400,y);
}