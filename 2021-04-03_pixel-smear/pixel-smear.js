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
	glitch_length = random(image_width/10);
	glitch_width = random(image_width/100);

	random_number = random();

	if(random_number < 0.25){
		glitch_pixel_right(my_image, glitch_length, glitch_width);
	}
	else if(random_number >= 0.25 && random_number < 0.5){
		glitch_pixel_left(my_image, glitch_length, glitch_width);
	}
	else if(random_number >= 0.5 && random_number < 0.75){
		glitch_pixel_down(my_image, glitch_length, glitch_width);
	}
	else if(random_number >= 0.75){
		glitch_pixel_up(my_image, glitch_length, glitch_width);
	}

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

function glitch_pixel_right(image_to_glitch, glitch_length=Infinity, glitch_width=1){
	x = int(random(image_to_glitch.width));
	y = int(random(image_to_glitch.height));

	pixel_to_glitch = image_to_glitch.get(x, y);

	for (let i = x; i < image_to_glitch.width && i < x + glitch_length; i++) {
		for (let j = 0; j < glitch_width; j++) {
			image_to_glitch.set(i, y + j, pixel_to_glitch);
		}
	}

	image_to_glitch.updatePixels();
}

function glitch_pixel_left(image_to_glitch, glitch_length=Infinity, glitch_width=1){
	x = int(random(image_to_glitch.width));
	y = int(random(image_to_glitch.height));

	pixel_to_glitch = image_to_glitch.get(x, y);

	for (let i = x; i > 0 && i > x - glitch_length; i--) {
		for (let j = 0; j < glitch_width; j++) {
			image_to_glitch.set(i, y + j, pixel_to_glitch);
		}
	}

	image_to_glitch.updatePixels();
}

function glitch_pixel_down(image_to_glitch, glitch_length=Infinity, glitch_width=1){
	x = int(random(image_to_glitch.width));
	y = int(random(image_to_glitch.height));

	pixel_to_glitch = image_to_glitch.get(x, y);

	for (let i = y; i < image_to_glitch.height && i < y + glitch_length; i++) {
		for (let j = 0; j < glitch_width; j++) {
			image_to_glitch.set(x + j, i, pixel_to_glitch);
		}
	}

	image_to_glitch.updatePixels();
}

function glitch_pixel_up(image_to_glitch, glitch_length=Infinity, glitch_width=1){
	x = int(random(image_to_glitch.width));
	y = int(random(image_to_glitch.height));

	pixel_to_glitch = image_to_glitch.get(x, y);

	for (let i = y; i > 0 && i > y - glitch_length; i--) {
		for (let j = 0; j < glitch_width; j++) {
			image_to_glitch.set(x + j, i, pixel_to_glitch);
		}
	}

	image_to_glitch.updatePixels();
}