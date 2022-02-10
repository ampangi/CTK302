
let x = 0;
function setup() {
  createCanvas(720, 400);
}

function draw() {
  angleMode(DEGREES);
  background('#9de9fa');
  noStroke();
  fill('#a9fcd3')
  rect(0, 300, 720, 300);

push();
  translate(x, 0);
  avatar();
  x += 5;
  if (x > width) {
    x = -400;
  }
pop();

}

function avatar() {
  fill("#FDE1D9");
  circle(360, 200, 100);
  rect(308, 275, 15, 60, 20);
  rect(398, 275, 15, 60, 20);
  rect(325, 355, 20, 60, 20);
  rect(375, 355, 20, 60, 20);


  push();
  translate(330, 235);
  rotate(90);
  fill("#ffc2c2");
  ellipse(0, 0, 10, 20);
  pop();

  push();
  translate(388, 235);
  rotate(90);
  fill("#ffc2c2");
  ellipse(0, 0, 10, 20);
  pop();

//eyes
  fill("#EBAD43");
  circle(335, 220, 20);
  circle(383, 220, 20);

//hair
  push();
  translate(340, 175);
  rotate(45);
  fill("#69A8D1");
  ellipse(0, 0, 50, 80);
  pop();

  push();
  translate(380, 175)
  rotate(135);
  fill("#69A8D1");
  ellipse(0, 0, 50, 80);
  pop();

  fill("#69A8D1");
  circle(320, 155, 50);
  circle(400, 155, 50);


//cloting
  fill("#9A7BA8");
  rect(318, 248, 85, 80, 10);
  circle(320, 265, 36);
  circle(398, 265, 36);

  fill("#DCD4DF");
  quad(320, 320, 402, 320, 420, 365, 300, 365);


  fill("#FDE1D9");
  arc(360, 245, 40, 40, 0, 180);

}
