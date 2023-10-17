let trusts = [];
let trustline = 300;
let trustcount = 0;
let bouncecount = 0;

function setup() {
  createCanvas(400, 400);
  trustcount = 0;
  bouncecount = 0;
  
}

function draw() {
  background(220);
  stroke(trustcount,0,0);
  strokeWeight(2);
  line(trustline,0,trustline,height);
  for (let t of trusts) {
    t.update();
    t.display();
    t.wbounce();
    t.mline();
  }
  print(trustcount);
}

function mousePressed() {
  let t = new trust();
  trusts.push(t);
}