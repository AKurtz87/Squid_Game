class Carrot {
  constructor() {
    this.r = 50;

    this.segmentsArray = this.generatePosition();

    this.random = Math.floor(Math.random() * this.segmentsArray.length);

    this.x = width;

    this.y = this.segmentsArray[this.random];
  }

  generatePosition() {
    let fishSegments = [];
    for (let i = 0; i < height; i += this.r) {
      fishSegments.push(i);
    }
    return fishSegments;
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
    image(carrotImg, this.x, this.y, this.r, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
