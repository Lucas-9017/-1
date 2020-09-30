class Bal {
    constructor(xBal, yBal, xSpeed, ySpeed, diameter, kleur) {
        this.x = xBal;
        this.y = yBal;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.diameter = diameter;
        this.kleur = kleur;
    }

    show() {
        noStroke();
        fill(this.kleur);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    update() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if (this.x >= 1280 - 0.5 * this.diameter || this.x <= 0.5 * this.diameter) {
            this.xSpeed = this.xSpeed * -1;
        }

        if (this.y >= 720 - 0.5 * this.diameter || this.y <= 0.5 * this.diameter) {
            this.ySpeed = this.ySpeed * -1;
        }
    }
}

class Blok {
    constructor(xBlok, yBlok, breedte, hoogte) {
        this.x = xBlok;
        this.y = yBlok;
        this.breedte = breedte;
        this.hoogte = hoogte;
    }

    show() {
        noStroke();
        fill(0, 0, 0);
        rect(this.x, this.y, this.breedte, this.hoogte);
    }
}

var ballen = [new Bal(100, 100, 7, 9, 10, "red"),
              new Bal(200, 100, 2, 3, 30, "yellow"),
              new Bal(300, 100, 10, 12, 40, "green"),
              new Bal(400, 100, 6, 8, 80, "red"),
              new Bal(500, 100, 4, 10, 45, "yellow")];

var blokken = [new Blok(100, 50, 120, 30),
               new Blok(100, 100, 120, 30),
               new Blok(100, 150, 120, 30),
               new Blok(100, 200, 120, 30),
               new Blok(100, 250, 120, 30),
               new Blok(100, 300, 120, 30),
               new Blok(100, 350, 120, 30),
               new Blok(100, 400, 120, 30),
               new Blok(250, 50, 120, 30)];

/*

var blokken = [for (var j = 0; j < 8; j++) {
                   for (var i = 0; i < 12; i++) {
        
    }
}

];

*/

function setup() {
    createCanvas(1280, 720);
}

function draw() {
    background("blue");

    for (var i = 0; i < ballen.length; i++) {
        var bal = ballen[i];
        bal.show()
        bal.update()
    }

    for (var i = 0; i < blokken.length; i++) {
        var blok = blokken[i];
        blok.show()
    }
}