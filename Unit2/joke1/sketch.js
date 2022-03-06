let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(18);
  textFont("Georgia");
}

function draw() {
  background(100);

  switch (state) {

    case 0:
      background("grey") ;
      fill('black');
      textSize(30);
      text("what's a ghosts favorite fruit?", width/2, height/2);
      break;

    case 1:
      background('blue');
      fill('white');
      text("BOO-berry!", width/2, height/2);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;

}
