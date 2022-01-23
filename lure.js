class Lure {
  constructor() {
    this.r = 100;

    this.segmentsArray = this.generatePosition();

    this.random = Math.floor(Math.random() * this.segmentsArray.length);

    this.x = width;

    this.y = this.segmentsArray[this.random];
  }
  /*
  generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  */

  generatePosition() {
    let lureSegments = [];
    for (let i = 0; i < height; i += this.r) {
      lureSegments.push(i);
    }
    return lureSegments;
  }

  move() {
    this.x -= 5;
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
