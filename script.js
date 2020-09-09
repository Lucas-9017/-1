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

  var xBal = 100;
  var yBal = 100;
  var radius = 100;
  var xSpeed = 10;
  var ySpeed = 10;

  // teken een cirkel
  ellipse(xBal, yBal, radius, radius);

  xBal = xBal + xSpeed;
  yBal = yBal + ySpeed;

  if (xBal >= 1280 || xBal <= 0) {
      xSpeed = xSpeed * -1;
  }

  if (yBal >= 720 || yBal <= 0) {
      ySpeed = ySpeed * -1;
  }


}