class Bal {
    constructor(xBal, yBal, xSpeed, ySpeed, diameter) {
        this.x = xBal;
        this.y = yBal;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.diameter = diameter;
    }
}

show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
}

update() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;

    if (this.xBal >= 1280 - 0.5 * this.diameter || xBal <= 0.5 * this.diameter) {
      this.xSpeed = this.xSpeed * -1;
    }
    
    if (this.yBal >= 720 - 0.5 * this.diameter || yBal <= 0.5 * this.diameter) {
      this.ySpeed = this.ySpeed * -1;
    }
}

var ballen = [new Bal(100, 100, 10, 5, 30),
              new Bal(200, 100, 10, 5, 30),
              new Bal(300, 100, 10, 5, 30)];

function setup() {
  createCanvas(1280, 720);
}

function draw() {
    background("blue");
    
    for(var i = 0;  i < ballen.length; i++) {
        var bal = ballen[i];
        bal.show()
        bal.update()
    }
}