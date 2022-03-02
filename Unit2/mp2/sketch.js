let state = 0;
let timer = 0;
let ocomp;
let space;


function setup() {
  createCanvas(676, 380);
  ocomp = loadImage("assets/ocomp.png");
  space = loadFont("assets/space.ttf");
}

function draw() {
  background('black');
  noStroke();
  angleMode(DEGREES);
  textAlign(CENTER);

  push();
  translate(310, 110);
  rotate(-2);
  fill('green');
  textSize(15);
  textFont(space);
  text('ERROR \nPRESS TO RESTART', 0, 0);
  pop();

  switch (state) {
    case 0:
      background('black');

      push();
      translate(305, 100);
      rotate(-1);
      fill('white');
      textSize(15);
      textFont(space);
      text('L O A D I N G', 0, 0);
      pop();

      push();
      translate(270, 120);
      rotate(-2);
      for (var i = 0; i < 5; i++) {
        fill(random(255))
        ellipse(i * 20, 10, 10);
      }
      pop();
      break;

    case 1:
      push();
      translate(0, 0);
      rotate(-2);
      for (var j = 0; j < 100; j++) {
        for (var i = 0; i < 100; i++) {
          fill(random(255), random(255), random(255))
          rect(i * 12, j * 12, 15, 15);
        }
      }
      pop();
      break;

    case 2:
      push();
      background('black');
      translate(306, 110);
      rotate(-2);
      fill('green');
      textSize(15);
      textFont(space);
      text('ERROR', 0, 0);
      pop();
      break;
  }

  image(ocomp, 0, 0);

  timer++;
  if (timer > 3 * 45) {
    timer = 0;
    state++;
  }

}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
