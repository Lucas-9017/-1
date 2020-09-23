class Bal {
    constructor(xBal, yBal, xSpeed, ySpeed, diameter) {
        this.x = xBal;
        this.y = yBal;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.diameter = diameter;
    }

    show() {
        noStroke();
        fill(255, 0, 0);
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
        noStoke();
        fill(0, 0, 255);
        rect(this.x, this.y, this.breedte, this.hoogte);
    }
}

var ballen = [new Bal(100, 100, 7, 5, 80),
              new Bal(200, 100, 7, 5, 80),
              new Bal(300, 100, 7, 5, 80),
              new Bal(400, 100, 7, 5, 80),
              new Bal(500, 100, 7, 5, 80)];

var blokken = [new Blok(500, 500, 50, 10)];

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
}