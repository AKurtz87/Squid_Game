class Life {
  constructor() {
    this.size = 35;
    this.x = 50;
    this.y = 50;
    this.testo = "LIFE  ";
    this.value = 10;
  }

  increase() {
    this.value++;
  }

  decrease() {
    this.value--;
  }

  decrease_5() {
    this.value -= 5;
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
