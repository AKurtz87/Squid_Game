class Score {
  constructor() {
    this.size = 35;
    this.x = width - 230;
    this.y = height - 625;
    this.testo = "SCORE  ";
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  zeroaize() {
    this.value = 0;
  }

  show() {
    textSize(this.size);
    textFont("Helvetica");
    text(this.testo + this.value, this.x, this.y);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
