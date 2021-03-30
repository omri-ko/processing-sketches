def setup():
  size(1000,1000)
  background(255)
  # frameRate(1)

  
def draw():
    draw_random_triangle()
    
def draw_random_triangle():
    # set random color fill. for black and white use: fill(random(255))
    fill(random(255), random(255), random(255))
    
    # set stroke
    noStroke()
    
    # draw triangle
    triangle(random(1000), random(1000), random(1000), random(1000), random(1000), random(1000))
    
