var sc;
var mt;
var hr;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  stroke(255, 0, 0);
  strokeWeight(7);
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  hr = hour();
  mt = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  mtAngle = map(mt, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
  line(0, 0, 100, 0);
}
