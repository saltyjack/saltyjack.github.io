

var r,g,b;


  
function setup() { 
  createCanvas(windowWidth - 400, windowHeight);
  background(250,250,100);
  
} 

function draw() { 
  
  r=random(255)
  g=random(255)
  b=random(255)
  noStroke()
  fill(r,g,b,50);
  ellipse(mouseX, mouseY, 25,25)  
}

function mousePressed() {
  background(250,250,100);
}