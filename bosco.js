var x = 500;
var y = 300;
var xpos = 40;
var ypos = 30;
var xpos2 =940 
var ypos2 =30;
var xspeed =5
var yspeed =4
var hit;
var hit2;
var move = 10;
var ymove = 6
var p1Score = 0;
var p2Score = 0;

function setup(){
    createCanvas (1000,500);
    
    // rectMode(CENTER);
}

function draw(){
    background(0); 
    //ball
    ellipse(x,y,50,50);
//moving the ball 
    x = x + move; 
    y = y  + ymove;

    

    //check if ball hits width
    if (x > width || x < 0){
        move *= -1;

    }

    //check if ball hits height
    if (y > height || y < 0){
        ymove *= -1;

    }



    fill(34,139,34); 
    //Drawing player one
    rect(xpos,ypos,20, 80);
    hit = dist (ypos,ypos,x,y);
    // if(x <= xpos +30 ){
    //     move *= -1;
    // } 
    console.log(hit);
    if(keyIsDown(UP_ARROW)){
        ypos = ypos   - 4;
    }
      
    if(keyIsDown(DOWN_ARROW)){
        ypos = ypos  + 4;
    }
    
   if (x - 50 == xpos +20 && y >= ypos && y <= ypos + 80 ){
       move *= -1;
   }

   

    //Drawing player two
    // hit=dist (xpos ,ypos, x,y);  
    // rect(xpos,ypos, 30, 200);

        
    fill(34,139,34); 
    //Drawing player two
    rect(xpos2,ypos2,20, 80);
    // if(x >= ypos +1000 ){
    //     move *= -1;
    // } 
    hit2 = dist(xpos2,ypos2,x,y)
    //     if(x<=xpos2 + 30){
    //   move *= +1;
    //    }

    if(keyIsDown(87)){
        ypos2 = ypos2   - 4;
    }
    if(keyIsDown(83)){
        ypos2 = ypos2  + 4;
    }

    if (x + 50 == xpos2  && y >= ypos2 && y <= ypos2 + 80 ){
        move *= -1;
    }

    ypos = constrain(ypos,0,420);
    ypos2 = constrain(ypos2,0,420);
    textSize(18);
    fill(255);
    text(p1Score,500,80 );
    text(p2Score,540,80 );

}
