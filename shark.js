class Shark {
  constructor() {
    this.r = 100;

    this.segmentsArray = this.generatePosition();

    this.random = Math.floor(Math.random() * this.segmentsArray.length);

    this.x = width;

    this.y = this.segmentsArray[this.random];
  }

  generatePosition() {
    let sharkSegments = [];
    for (let i = 0; i < height; i += this.r) {
      sharkSegments.push(i);
    }
    return sharkSegments;
  }

  generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  move() {
    this.x -= 5;
  }

  show() {
    image(sharkImg, this.x, this.y, this.r + 50, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
