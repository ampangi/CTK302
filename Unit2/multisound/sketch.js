let state = 0;
let song1, song2, song3;
let cuddles;

function preload() {
  song1 = loadSound("assets/breeze.mp3");
  song2 = loadSound("assets/cute.mp3");
  song3 = loadSound("assets/onceagain.mp3");
}

function setup() {
  createCanvas(500, 500);
  cuddles = loadFont("assets/Cuddles.ttf");
}

function draw() {
  textAlign(CENTER);

  switch (state) {
    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background('pink');
      fill('white');
      textSize(32);
      textFont(cuddles);
      text('listening to song 1', width/2, height/2);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      background('#7dd1ff');
      fill('white');
      textSize(32);
        textFont(cuddles);
      text('listening to song 2', width/2, height/2);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      background('#ffd67d');
      fill('white');
      textSize(32);
        textFont(cuddles);
      text('listening to song 3', width/2, height/2);
      break;

  }

}


function mouseReleased() {
  state = (state + 1) % 6;

  song1.pause();
  song2.pause();
  song3.pause();
}
