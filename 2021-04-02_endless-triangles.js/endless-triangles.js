let is_paused = false;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  background(255);
  //frameRate(1)
}

  
function draw(){
    draw_random_triangle();
}
    
    
function mouseClicked(){
  is_paused = !is_paused;

  if (pause){
    noLoop();
  } else{
    loop();
  }
}
    
    
function draw_random_triangle(){
    // set random color fill. for black and white use: fill(random(255))
    fill(random(255), random(255), random(255));
    
    // set stroke
    noStroke();
    
    // draw triangle
    triangle(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight));
}