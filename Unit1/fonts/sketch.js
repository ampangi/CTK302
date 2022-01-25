let sat, cuddles;


function setup() {
  createCanvas(500, 500);
sat = loadFont("assets/Saturday.ttf");
cuddles = loadFont("assets/Cuddles.ttf");

textAlign(CENTER);

}

function draw() {

background("purple");

textSize(80);
fill("white");

textFont(sat);
text("hello internet!", width/2, 200);

textFont(cuddles);
text("i am tired!", width/2, 300);


}
