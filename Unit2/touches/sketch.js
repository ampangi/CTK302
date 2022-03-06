let numberOfTouches ;
let one;
let two;
let three;

function setup() {
  createCanvas(400, 400);
  one = loadImage("assets/one.jpg");
  two = loadImage("assets/two.jpg");
  three = loadImage("assets/three.jpg");
}

function draw() {
  textAlign(CENTER);
  clear();
  numberOfTouches = touches.length;
  //text(numberOfTouches + ' touches', 5, 10);
  background('pink');

  switch(numberOfTouches) {
    case 0:
      text("it's lonely here", 200, 22) ;
      break ;

      case 1:
       text("look, one cat!", 200, 22) ;
      image(one, 25,30, 350, 350);
      break ;

      case 2:
      text("two cats!", 200, 22) ;
      image(two, 25,30, 350, 350);
      break ;

      case 3:
     text("THREE CATS!", 200, 22) ;
     image(three, 25,30, 350, 350);
      break ;


  }

}
