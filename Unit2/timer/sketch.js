let state = 0;
let timer = 0;
let timer1, timer2, timer3;

function setup() {
  createCanvas(400, 400);
  timer1 = loadImage("assets/timer1.png");
  timer2 = loadImage("assets/timer2.png");
  timer3 = loadImage("assets/timer3.png");
}

function draw() {

  switch (state) {

    case 0:
      image(timer1, 0, 0, 400, 400);

      //timer code
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }

      break;

    case 1:
      image(timer2, 0, 0, 400, 400);
      //timer code
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      image(timer3, 0, 0, 400, 400);
      //timer code
      timer++;
      if (timer > 8 * 60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
