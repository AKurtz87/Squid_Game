class Ink {
  constructor(x, y) {
    this.r = 50;
    //this.x = width;s
    //this.y = height - this.r; // max 500
    this.x = x;
    this.y = y;
  }

  move() {
    this.x += 20;
  }

  hits(train) {
    let x1 = this.x + this.r;
    let y1 = this.y + this.r;
    let x2 = train.x + train.r;
    let y2 = train.y + train.r;
    return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }

  show() {
    image(lureImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
