function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  let centerX = width / 2;
  let centerY = height / 2;

  push();
  translate(centerX, centerY);
  rotate(PI / 4);
  fill(255, 0, 0);
  rect(-300, -40, 600, 80); // Bigger red rectangle
  pop();

  push();
  translate(centerX, centerY);
  rotate(-PI / 6);
  fill(0, 128, 0);
  rect(-200, -80, 400, 60); // Bigger green rectangle
  pop();

  push();
  translate(centerX, centerY);
  rotate(PI / 3);
  fill(0, 0, 255);
  triangle(-150, -100, 150, -100, 0, 150); // Bigger blue triangle
  pop();

  push();
  translate(centerX, centerY);
  rotate(-PI / 4);
  fill(255, 255, 0);
  rect(-100, 160, 200, 40); // Bigger yellow rectangle
  pop();
}

function draw() {
}
