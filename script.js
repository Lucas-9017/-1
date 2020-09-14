class Bal {
    constructor(xBal, yBal, xSpeed, ySpeed, diameter) {
        this.x = xBal;
        this.y = yBal;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.diameter = diameter;
    }
}

var xBal = [100, 300, 500, 700];
var yBal = [200, 200, 200, 200];
var xSpeed = [10,  10, 10, 10];
var ySpeed = [5, 5, 5, 5];
var diameter = [50, 50, 50, 50];

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
    background("blue");
    
    // stel vulkleur in
    fill(0, 255, 0);
    
    // teken een cirkel
    for(var i = 0;  i < ballen.length; i++) {
        var bal = ballen[i];
        bal.show()
        bal.update()
    }
    
    ellipse(this.xBal, this.yBal, this.diameter, this.diameter);
    
    this.xBal = this.xBal + this.xSpeed;
    this.yBal = this.yBal + this.ySpeed;
    
    if (this.xBal >= 1280 - 0.5 * this.diameter || xBal <= 0.5 * this.diameter) {
      this.xSpeed = this.xSpeed * -1;
    }
    
    if (this.yBal >= 720 - 0.5 * this.diameter || yBal <= 0.5 * this.diameter) {
      this.ySpeed = this.ySpeed * -1;
    }

}