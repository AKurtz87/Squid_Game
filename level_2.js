function level_2() {
  function hits(ta, tb) {
    let x1 = ta.x + ta.r;
    let y1 = ta.y + ta.r;
    let x2 = tb.x + tb.r;
    let y2 = tb.y + tb.r;
    return collideCircleCircle(x1, y1, ta.r, x2, y2, tb.r);
  }

  function shoot() {
    for (let t of inks) {
      t.move();
      t.show();
      if (hits(monsters[0], t)) {
        changeBackground("red");
        score.increase();
        monsters[0].r -= 2;
        difficultyLure += 0.0001;
        difficultyShark += 0.0001;
        inks = [];
      }
    }
  }

  function checkMonsterLevel() {
    if (monsters[0].r < 50) {
      changeBackground("red");

      inks = [];
      monsters = [];

      squid.r = 0.1;

      noLoop();

      changeBackground(bImg);

      utilities.showWin();

      console.log("You Win");
    }
  }

  function checkLife() {
    if (life.value === 0 || life.value < 0) {
      inks = [];
      monsters = [];

      squid.r = 0.1;

      noLoop();

      changeBackground(b2Img);

      utilities.showGameOver();

      console.log("Game Over");
    }
  }

  function changeBackground(bkImage) {
    background(bkImage);
  }

  function checkCollision() {
    for (let t of lures) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        life.decrease();
        difficultyLure += 0.0008;
        background("red");
        lures = [];
      }
    }
  }

  function checkSharkCollision() {
    for (let t of sharks) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        life.decrease_5();
        difficultyShark += 0.00005;
        background("red");
        sharks = [];
      }
    }
  }

  function checkStar() {
    for (let t of stars) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        life.increase();
        stars.shift();
      }
    }
  }

  changeBackground(b2Img);

  if (random(1) < difficultyLure) {
    let lure = new Lure();
    lures.push(lure);
  }

  if (random(1) < difficultyShark) {
    sharks.push(new Shark());
  }

  if (random(1) < difficultyStar) {
    stars.push(new Star());
  }

  monsters.push(new Monster());

  checkCollision();

  checkSharkCollision();

  checkStar();

  shoot();

  checkMonsterLevel();

  checkLife();

  life.show();
  score.show();

  squid.show();
  squid.move();

  monsters[0].show();
}
