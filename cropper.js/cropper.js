let is_paused = false;
let image_height = 1000;
let image_width = 1000;
let my_image = null;

function preload() {
	my_image = loadImage(`https://picsum.photos/${image_height}/${image_width}`);
}


function setup() {
	let myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myContainer');
	background(0);
	imageMode(CENTER);
	image(my_image, windowWidth / 2, windowHeight / 2);
}

  
function draw(){
	// select random top left corner
	x = int(random(my_image.width));
	y = int(random(my_image.height));

	// select random width and height
	// divided by ten to not have big crops
	width = max(1, int(random((my_image.width - x) / 10)));
	height = max(1, int(random((my_image.height - y) / 10)));

	// get cropped image
	// had to use this instead of: image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight]) due to problems with imageMode(CENTER)
	cropped_image = my_image.get(x,y,width,height);

	// select random point to place the image.
	// we are working in imageMode(CENTER) so we need to adjust coordinates
	dx = windowWidth / 2 + random(-image_width/2 + width/2, image_width/2 - width/2);
	dy = windowHeight / 2 + random(-image_height/2 + height/2, image_height/2 - height/2);

	// draw cropped image
	image(cropped_image, dx, dy);
}

function mouseClicked(){
  is_paused = !is_paused;

  if (is_paused){
    noLoop();
  } else{
    loop();
  }
}