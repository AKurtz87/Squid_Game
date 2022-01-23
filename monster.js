class Monster {
  constructor() {
    this.r = 500;
    //this.x = width;
    //this.y = height - this.r; // max 500
    this.x = width - 600;

    this.y = height / 5;
  }

  generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  moveX() {
    this.x -= 5;
  }

  moveY() {
    this.y -= 5;
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
