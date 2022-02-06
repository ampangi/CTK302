//sparkling star code by hosken (https://editor.p5js.org/hosken/sketches/LRCedfGPY)
let stars = []

function setup() {
  createCanvas(720, 400);
  	for (i = 0; i < 500; i++){
		let star = {
			x:random(0,width),
			y:random(0,height)
		};

		stars.push(star);
	}
}

function draw() {
  angleMode(DEGREES);
  background('#9de9fa');
  noStroke();

   if (mouseIsPressed) {
     //grass and sky
   background("#282a4d");
   for (i = 0; i < 500; i++){
		let x = stars[i].x;
		let y = stars[i].y;

		fill(255);
		ellipse(x,y,random(1,3),random(1,3));
	}

  fill('#507d54')
  rect(0, 300, 720, 300);


//moon
  fill("white");
  circle(80, 80, 100);

//planet
  push();
  fill("#B889FE");
  translate(540, 95);
  rotate(165);
  circle(0, 0, 98);
  pop();

  push();
  fill("#7843E6");
  translate(540, 95);
  rotate(75);
  ellipse(0, 0, 60, 150);
  pop();

  push();
  fill("#B889FE");
  translate(540, 95);
  rotate(165);
  arc(0, 0, 100, 90, 0, 180);
  pop();


//silver (night)
    fill("#FDE1D9");
    circle(360, 200, 100);

    push();
    fill("#FDE1D9");
    translate(320, 265) ;
    rotate(135);
    rect(0, 0, 15, 80, 20);
    pop();

    push();
    fill("#FDE1D9");
    translate(410, 275);
    rotate(225);
    rect(0, 0, 15, 80, 20);
    pop() ;

    fill("#FDE1D9");
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
    fill("white");
    circle(335, 220, 20);
    circle(383, 220, 20);

 //hair
    push();
    translate(340, 175);
    rotate(45);
    fill("#85A2B5");
    ellipse(0, 0, 50, 80);
    pop();

    push();
    translate(380, 175)
    rotate(135);
    fill("#85A2B5");
    ellipse(0, 0, 50, 80);
    pop();

    fill("#85A2B5");
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




  } else {
   //grass
  fill('#a9fcd3')
  rect(0, 300, 720, 300);

//sun and clouds
  fill("#ffe17d");
  circle(80, 80, 100);

   fill('white');
  circle(140, 130, 100);
  circle(190, 80, 85);
  circle(220, 160, 105);
  circle(270, 90, 100);

  circle(525, 60, 95);
  circle(590, 90, 70);
  circle(490, 100, 110);
  circle(535, 130, 80);

//silver
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


  //fill('white');
  //text(mouseX + ', ' + mouseY, 20, 20)
}


function mouseReleased() {
  print(mouseX + ', ' + mouseY)

}
