
//set up variables here
var myGamePiece;
var myObstacle;
var myObstacletop;
var flag = false;
var flag_2 = false;
var flag_3 = false;
var flagran = false;
var ab = 7;
var flag_4 = true;
	 var crazy= 0;
	var rans = 0;
var flag_obs = false;
var flag_obsy = false;
var flag_obsytop = false;
var movey = 0;
	
	
	


function startGame() {
	//set up new components and  here
    myGamePiece = new component(10, 10, "red", 0, 179);
    myObstacle  = new obstacle(50, 160, "black", 700, 240);   
		myObstacletop  = new obstacle(50, 120, "black", 700, 0);   
    myGameArea.start();
		myObsmove.start();
		myObsmovey.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
			//on start of game
        this.canvas.width = 1500;
        this.canvas.height = 400;
			  this.frameNo = 0;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
			//clears everything so its not all wierd looking
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
			//end game
        clearInterval(this.interval);
    }
}

var myObsmove = {
//sets up obstacle movement functions
	start : function() {
		this.interval = setInterval(function(){updateObsMove()}, 2000);
		
	}
}
var myObsmovey = {
//sets up obstacle movement functions
	start : function() {
		this.interval = setInterval(function(){updateObsMovey()}, 12000);
		
	}
}

function mymovey(){
	setInterval(mymoveyy, 2000)
}

function mymoveyyFunction() {
	movey = Math.floor((Math.random() * 3) + 2);
}


function randomnumber(){
	setInterval(myrandomFunction, 2000)
	
}
function myrandomFunction() {

		rans = Math.floor((Math.random() * (ab * .5) -.5) + 1);
	
	
				
	}
	
	function myfunctionReturns(){
		document.getElementById("random").innerHTML = movey
	}

	


function component(width, height, color, x, y) {
	//ball component
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
	  this.bounce = .999;
		this.speed = -10;
		this.incrs = 1;
		this.score = 0;
    this.update = function() {
			//update ball
        ctx = myGameArea.context;
        ctx.fillStyle = color;
			  ctx.fill()
				ctx.beginPath()
        ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI, false);
    }
		this.posit =  function(){
			//move ball in y
			this.speed += this.incrs
	  	this.y += this.speed
			this.hitBottom();
		
		}
		this.hitBottom = function() {
			//bounce the ball
			var rockbottom = myGameArea.canvas.height - this.height
			if(this.y > rockbottom){
				this.y = rockbottom
				this.speed = -(this.speed * this.bounce)
				}
			var topp = 0;
			if(this.y < topp){
				//mess up ball whne it hits the top
				this.speed =(-this.speed * .9)
			}
			
			
	
			}
		this.posit_2 =  function(){
			//move ball in y
			this.speed += this.incrs
	  	this.y -= this.speed
			this.hitBottom_2();
		
		}
		this.hitBottom_2 = function() {
			//bounce the ball
			var rocktop = myGameArea.canvas.height - myGameArea.canvas.height
			if(this.y < rocktop){
				this.y = rocktop
				this.speed = -(this.speed * this.bounce)
				}
			var botttom = 400;
			if(this.y > botttom){
				//mess up ball whne it hits the top
				this.speed =(-this.speed * .9)
			}
			
			
	
			}
		this.move = function() {
			//move the ball
			
			var rightside = myGameArea.canvas.width - this.width;
			if(this.x > rightside){
				flag = true;
				this.score += 1;
	
			}
			if(this.x < 1){
				flag = false;
				this.score += 1;
	
			}
			if((this.x > myObstacle.x && this.x < myObstacle.x + 5)){
				
			}	
			
			
			this.switch();
			
		}
		
		
		
		this.switch = function() {
			if(flag == true){
			this.x -= ab
				
			}
			else{
				this.x += ab 
			}
		}
		
		
			
			
			
			
		
		
		
    this.crashWith = function(otherobj) {
			//end the game
        var myleft = this.x
        var myright = this.x
        var mytop = this.y 
        var mybottom = this.y
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
		
}
	
	function myFunctionmouse () {
	myGamePiece.speed = 20;
	//bounce button
}

window.onkeypress = myFunction
	//admin controls for game
function myFunction(event) {
	
    var keys = event.keyCode;
    
	if(keys == 32){
		document.getElementById("keyscode").innerHTML = "yay"
		myGamePiece.speed = -10;
	}
	else if(keys == 115){
		document.getElementById("keyscode").innerHTML = "The Unicode value is: " + keys;
		myGamePiece.incrs += .05;
	}
	else if(keys == 119){
		document.getElementById("keyscode").innerHTML = "The Unicode value is: " + keys;
		myGamePiece.incrs -= .05;
	}
	else if(keys == 100){
		document.getElementById("keyscode").innerHTML = "The Unicode value is: " + keys;
		ab += .2;
	}
	else if(keys == 97){
		document.getElementById("keyscode").innerHTML = "The Unicode value is: " + keys;
		ab -= .2;
	}
	else{
	
		document.getElementById("keyscode").innerHTML = "The Unicode value is: " + keys;
	}
}
function obstacle(width, height, color, x, y) {
		//creates obstacle
    this.width = width;
    this.height = height;
    this.x = x;
		this.counter = 0;
		this.movement = 0;
    this.y = y; 
	//updates obstacle
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
		this.moveobs = function() {
			//move the ball
			
			var rightsideobs = myGameArea.canvas.width - myObstacle.width;
			if(this.x > 1400){
				 flag_obs = true;
		
	
			}
			if(this.x < 1){
				flag_obs = false;
			
	
			}
			if(this.x < 400 ){
			flag_obs = false;
			}
			if(this.x > 1100){
				flag_obs = true;
			}
			
		if(flag_obs == true){
			this.x -= rans
				
			}
			else{
				this.x += rans 
			}
			
		}
		
		this.moveobsytop = function() {
			//move the ball
			
			
			if(this.height > 240){
				 flag_obsytop = true;
		
	
			}
			if(this.height < 120){
				flag_obsytop = false;
			
	
			}
			
			
		if(flag_obsytop == true){
			this.height -= movey
				
			}
			else{
				this.height += movey
				
			}
			
		}
		this.moveobsy = function() {
			//move the ball
			
			
			if(this.y > 360){
				 flag_obsy = true;
		
	
			}
			if(this.y < 240){
				flag_obsy = false;
			
	
			}
			
			
		if(flag_obsy == true){
			this.height -= movey
			this.y -= movey
			}
			else{
				this.height += movey
				this.y += movey
				
			}
			
		}
		
		
			
		
		
		
		
		
}
	

function updateGameArea() {
	myGamePiece.incrs += .00001
	ab += .003;
	myGameArea.frameNo += 3;
	 document.getElementById("demo").innerHTML = myGamePiece.x
	  document.getElementById("test").innerHTML = myGamePiece.y
	  document.getElementById("tester").innerHTML = myGamePiece.speed
		document.getElementById("score").innerHTML = myGamePiece.score
		
	
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
    } 
		else if(myGamePiece.crashWith(myObstacletop)){
				myGameArea.stop();
		}
	
		else if((myGamePiece.score < 15 && myGamePiece.score > -1) || (myGamePiece.score > 19 && myGamePiece.score < 29) || (myGamePiece.score > 29)){
				myfunctionReturns();
        myGameArea.clear();
			
				
				myObstacle.moveobs();
				myObstacletop.moveobs();
			 myObstacle.moveobsy();
				myObstacletop.moveobsytop();
		
			
		
			
			 
			 
			 
			
			
        myObstacle.update();
				myObstacletop.update();
		
				
				  myGamePiece.update();
					myGamePiece.posit();	
				myGamePiece.move();
				myGamePiece.objmove();
				
			
			
		}
	else if((myGamePiece.score > 14 && myGamePiece.score < 20) || (myGamePiece.score > 28 && myGamePiece.score < 30)){
				myfunctionReturns();
        myGameArea.clear();
			
				
					myObstacle.moveobs();
				myObstacletop.moveobs();
			 myObstacle.moveobsy();
				myObstacletop.moveobsytop();
		
			
		
			
			 
			 
			 
			
			
        myObstacle.update();
				myObstacletop.update();
		
				
				  myGamePiece.update();
					myGamePiece.posit_2();	
				myGamePiece.move();
				myGamePiece.objmove();
				
			
			
		}
	
			
}
	function updateObsMove() {
	myrandomFunction();
		if(flag_obs == true){
			flag_obs = false;
		}
		else if(flag_obs == false) {
			flag_obs = true;
		}
		if(flag_obsy == true){
			flag_obsy = false;
		}
		else if(flag_obsy == false) {
			flag_obsy = true;
		}
		if(flag_obsytop == true){
			flag_obsytop = false;
		}
		else if(flag_obsytop == false) {
			flag_obsytop = true;
		}
			
	
	
	
}
	
	
	function updateObsMovey() {
		mymoveyyFunction();
		
		
		
			
	
	
	
}


	
	
