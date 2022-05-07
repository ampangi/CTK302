var bubbles = [];
let url = "";

let star;
let space;

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  let key = "14-eGsR6rARr_ME-lUPUdcni0qziqbAfPnCG17bZ7Nxg";

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(1280, 610);
  textAlign(CENTER);
  //ellipseMode(CENTER);
  //rectMode(CENTER);
  star= loadImage('assets/star.png');
  space= loadImage('assets/spaceblue.jpg');
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What's your favorite color?"],
        data[i]["What's your favorite fruit?"],
        data[i]["What's your name?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  //background("black");
  image(space, 0, 0);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(color, fruit, name) {
    // only the order of these parameters matters!
    this.color = color;
    this.fruit = fruit;
    this.name = name;

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(1, 3), 0);
  }

  display() {
    stroke("black");
    noFill();
    image(star, this.pos.x-50, this.pos.y-50, 100, 100);
    //ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.name + "\n" + this.color + "\n" + this.fruit,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;

  }


}
