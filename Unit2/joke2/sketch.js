let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(18);
  textFont("Georgia");
}

function draw() {

timer++;
if(timer > 2*60) {
  timer = 0;
    state = (state + 1) %2;
}

  switch (state) {

    case 0:
      background("#32a8a0") ;
      fill('white');
      text("what did one ocean say to the other ocean?", width/2, height/2);
      break;

    case 1:
      background('#409cff');
      fill('white');
      text("nothing, it just waved", width/2, height/2);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;

}
