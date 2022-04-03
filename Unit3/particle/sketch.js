let cars = [];

let underwater;
let fish;
let bubbles;

function setup() {
  createCanvas(500, 500);
  noStroke();

  underwater= loadImage("assets/underwater.png");
  fish= loadImage("assets/fish.png");
  bubbles= loadFont("assets/bubbles.ttf");

  // Spawn one object
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }

}

function draw() {
  //background(100);
  image(underwater, 0, 0);

  push();
  fill('white');
  textFont(bubbles);
  textSize(100);
  text("Bubbles!", 90, 120);
  pop();

image(fish, 95, 120);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}




class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width / 2, 500); // initialize your attributes here
    this.vel = createVector(random(-5, 5), random(-8, -5));
    this.r = 255 //random(255);
    this.g = 255 //random(255);
    this.b = 255//random(250, 255);
    this.a = random(255);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a -5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }

}
