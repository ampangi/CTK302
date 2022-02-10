let x = 0;
let cuddles;

function setup() {
  createCanvas(500, 500);
  cuddles = loadFont("assets/Cuddles.ttf");

}

function draw() {
background('black');

fill('white');
textSize(50);
textFont(cuddles);
text("i am sleepy", x, 250);
x = x + 2;
if (x > width) {
  x = 0;
}

}
