let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  //rectMode(CENTER);
  textSize(18);
  textFont("Georgia");
}

function draw() {
  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      fill('black');
      text("why did the chicken cross the road?", width/2, 250);
      break;

    case 1:
      background('blue');
      fill('white');
      text("it didn't. were you expecting something else?", width/2, 250);
      break;

  }

  fill('green');
  ellipseMode(CORNER);
  ellipse(100, 100, 100, 100);
}

function mouseReleased() {
  if((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)){
  state= (state + 1) % 2;
}
}
