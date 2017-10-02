var s;
var scl = 20;
var food;
var colors_4;
var colors_5;
var colors_6;

 
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(13);
  pickLocation();
    
	
  
	colors_4 = random([1],[225])
	
	colors_5 = random([1],[225])
	
	colors_6 = random([1],[225])
  
}



function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), (floor(random(rows))));
  food.mult(scl);
}


 
function draw() {
  background(51);
  s.death();
  s.update();
  s.show();
	
  
  
  if (s.eat(food)) {
    pickLocation();
  }

  fill(colors_4,colors_5,colors_6)
  rect(food.x, food.y, scl, scl)
}


var x = -1;
var y = 1;

function keyPressed() {
  
  if (keyCode === UP_ARROW) {
    s.dir(0, x);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, y);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(y, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(x, 0);
  }
	

    
  
}

//snake

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  
    
  var colors_10;
  colors_10 = random([1],[225])
  var colors_9;
  colors_9 = random([1],[225])
  var colors_8;
  colors_8 = random([1],[225])
  
  var sz;
  sz = 10
  var siz;
  siz = 30
  var score;
  score = this.tail.length
  var work;
  work = 0
  var yay;
  var conslog;
  
	var scr;
  
  
  if (this.tail.length > 0) {
    scr.score(this.tail.length)
    
  }
  
  
  var colors_1;
  colors_1 = random([1],[225])
  var colors_2;
  colors_2 = random([1],[225])
  var colors_3;
  colors_3 = random([1],[225])
  
  
   
 
  
  
  this.eat = function(pos) {
    var d = dist(this.x,this.y,pos.x,pos.y);
    if (d < 1) {
      this.total ++;
      return true;
    } else {
      return false;
    }
  }
  
  this.dir = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }
	
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y)
      if (d < 1) {
        console.log('score was: '+this.tail.length);
        console.log('starting over');
        conslog = 2
        var yay = this.tail.length
        this.total = 0;
        this.tail = [];
        this.x = 0;

        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
        sz = 10;
        
        
        
        
      }
    }
  }
  
  
  
	this.update = function() {
    
    
    if (this.total === this.tail.length) {
     	 for (var i = 0; i < this.tail.length-1; i++){
     	this.tail[i] = this.tail [i+1]
    	}
    
		}
    this.tail[this.total-1] = createVector(this.x,this.y);
    
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
    
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
	}
		this.show = function() {
      fill(colors_1,colors_2,colors_3);
      for (var i =0; i < this.tail.length; i++) {
        rect(this.tail[i].x,this.tail[i].y,scl,scl);
      }
      textSize(sz)
      fill(colors_8,colors_9,colors_10)
			text("score: " + this.tail.length, 280, 10)
			
      if (this.tail.length > 1 && conslog == 2) {
        console.log('score: ' + this.tail.length)
      }
      
			rect(this.x,this.y,scl,scl);
      
      fill(colors_8,colors_9,colors_10)
      if( this.xspeed == 0 && this.yspeed == 0 && conslog == 2) {
        
        textSize(siz)
        text('You Failed, Press Right To Try Again',56,290)
        textSize(32)
        work = yay
      
	}
    
    }
    
}

