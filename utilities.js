class Utilities {
  constructor() {
    this.size = 60;
    this.x = width / 2 - 160;
    this.y = height / 2;
    this.gameOver = "GAME OVER";
    this.win = "YOU WIN";
  }

  showGameOver() {
    textSize(this.size);
    textFont("Helvetica");
    text(this.gameOver, this.x, this.y);
  }

  showWin() {
    textSize(this.size);
    textFont("Helvetica");
    text(this.win, this.x, this.y);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
