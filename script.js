var farms = 0
var farm_buy = 'no'
var grandmas = 0
var grandma_buy = 'no'
var cursors = 0
var cursor_buy = 'no'
var cookies = 0
let Background

function preload(){
Background = loadImage ('background.png');
cookie = loadImage ('cookie.png');
}

var cookie = {
  image: null,
  x: 100,
  y: 160
}


function setup() {
  frameRate(100)

  button = createButton('Cursors:' + cursors);
  button.size(200, 50)
  button.position(windowWidth - 202, 80);
  button.mousePressed(() => { cursors = cursors + 1 });

  button = createButton('Grandmas:' + grandmas);
  button.size(200, 50)
  button.position(windowWidth - 202, 130);
  button.mousePressed(() => { grandmas = grandmas + 1 });

   button = createButton('Farms:' + farms);
  button.size(200, 50)
  button.position(windowWidth - 202, 180);
  button.mousePressed(() => { farms = farms + 1 });
  background(255);

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER)
  cookie.image.resize(150, 150)
  background (background,0,0); 
  image(cookie.image, cookie.x, cookie.y)
  textSize(24)
  text("cookies:" + cookies, 45, 60)
  background (Background,600,400); 
}

function mousePressed() {

  var d = dist(cookie.x, cookie.y, mouseX, mouseY)
  if (d < 70) {
    cookies = cookies + 1;
  }
}

function wait(time) {
  start = millis()
  do {
    current = millis();
  }
  while (current < start + time)
}

function Buy() {
  
}