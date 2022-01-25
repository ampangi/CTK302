let cat ;
let space ;
let waffles ;


function setup() {
  createCanvas(500, 500);

cat = loadImage("assets/cat.jpg");
space = loadImage("assets/space.jpg");
waffles = loadImage("assets/waffles.jpg");

}

function draw() {
image(cat, width/2, 100, 100, 100);
image(space, width/2, 220, 100, 100);
image(waffles, width/2, 340, 100, 100);
}
