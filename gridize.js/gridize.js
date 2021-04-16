let is_paused = false;
let image_height = 1000;
let image_width = 1000;
let my_image = null;
let get_glitch_width = function(){return random(image_width/100);}

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
	glitch_width = get_glitch_width();

	// select random pixel to smear
	x = int(random(my_image.width));
	y = int(random(my_image.height));


	// randomly select to smear horizontally or vertically
	random_number = random();

	if(random_number < 0.5){
		smear_horizontal(my_image, x, y, glitch_width);
	}
	else{ //if(random_number >= 0.5)
		smear_vertical(my_image, x, y, glitch_width);
	}

	// update image and canvas
	my_image.updatePixels();
	image(my_image, windowWidth / 2, windowHeight / 2);
}

function mouseClicked(){
  is_paused = !is_paused;

  if (is_paused){
    noLoop();
  } else{
    loop();
  }
}

function smear_horizontal(image_to_glitch, x, y, glitch_width=1){
	pixel_to_glitch = image_to_glitch.get(x, y);

	for (let i = 0; i < image_to_glitch.width; i++) {
		for (let j = 0; j < glitch_width; j++) {
			image_to_glitch.set(i, y + j, pixel_to_glitch);
		}
	}
}

function smear_vertical(image_to_glitch, x, y, glitch_width=1){
	pixel_to_glitch = image_to_glitch.get(x, y);

	for (let i = 0; i < image_to_glitch.height; i++) {
		for (let j = 0; j < glitch_width; j++) {
			image_to_glitch.set(x + j, i, pixel_to_glitch);
		}
	}
}