let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      for(let j = 0; j < 20; j++){
        for(let i = 0; i < 20; i++){
        fill("blue");
        rect(i*20, j*20, 12, 12);
      }
    }
      break;

    case 1:
      background("purple");
      for(let j = 0; j < 20; j++){
        for(let i = 0; i < 20; i++){
        fill(random(255));
        ellipse(i*20, j*20, 8, 8);
      }
    }
      break;

    case 2:
      background("green");
      for(let j = 0; j < 20; j++){
        for(let i = 0; i < 20; i++){
        fill(random(255), random(0), random(255));
        rect(i*20, j*20, 12, 12);
      }
    }
      break;

    case 3:
      for(let j = 0; j < 20; j++){
        for(let i = 0; i < 20; i++){
        fill('orange')
        ellipse(i*20, j*20, 25, 25);
      }
    }
      break;

    case 4:
        for(let j = 0; j < 20; j++){
          for(let i = 0; i < 20; i++){
          fill(random(255), random(255), random(255))
          rect(i*20, j*20, 20, 20);
        }
      }
        break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
