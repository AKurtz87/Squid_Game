class Squid {
  constructor() {
    this.r = 100;
    this.x = 100;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.7;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -20;
    }
  }

  moveUp() {
    this.gravity = 0;

    this.vy = -8;
  }

  moveDown() {
    this.gravity = 0;

    this.vy = +8;
  }

  hits(train) {
    let x1 = this.x + this.r;
    let y1 = this.y + this.r;
    let x2 = train.x + train.r;
    let y2 = train.y + train.r;
    return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(uImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
