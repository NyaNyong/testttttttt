class trust{
  
  constructor() {
    this.pos = createVector(mouseX,mouseY);
    this.vel = createVector(random(10,20), 0);
    this.acc = createVector(0, 0.1);
    this.w = 10;
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.975);
    this.pos.add(this.vel);
  }
  
  wbounce(){
    if (this.pos.y > height - bouncecount || this.pos.y < 0) {
      if (this.pos.y > height - bouncecount) {
        this.pos.y = height - bouncecount;
      }

      this.vel.y *= -1;
    }
    if (this.pos.x > width || this.pos.x < 0) {
      if (this.pos.x > width) {
        this.pos.x = width;
      }

      this.vel.x *= -1;
      bouncecount = bouncecount+1;
    }
    
    if (this.pos.x > trustline) {
      if (trustcount < 250) {
        this.pos.x = trustline;
      this.vel.x *= -1;
      trustcount = trustcount + 25
    }
    }
  }
  
  mline() {
    stroke(0);
    strokeWeight(0.5);
    line(this.pos.x,this.pos.y,mouseX,mouseY);
  }
  
  display(){
    stroke(0);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.w);
  }
}
