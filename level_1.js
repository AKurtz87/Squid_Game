function level_1() {
  if (random(1) < difficultyLure) {
    let target = new Lure();
    lures.push(target);
    //console.log(target.segmentsArray);
  }

  if (random(1) < difficultyFood) {
    let target1 = new Fish();
    fishs.push(target1);
    //console.log(target1.segmentsArray);
  }

  if (random(1) < difficultyStar) {
    stars.push(new Star());
  }

  if (random(1) < difficultyCarrot) {
    carrots.push(new Carrot());
  }

  if (random(1) < difficultyShark) {
    sharks.push(new Shark());
  }

  if (random(1) < difficultyGamb) {
    gambs.push(new Gamb());
  }

  function checkCollision() {
    for (let t of lures) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        life.decrease();

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
        difficultyShark += 0.0001;
        background("red");
        sharks = [];
      }
    }
  }

  function checkGambCollision() {
    for (let t of gambs) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        difficultyGamb += 0.0001;

        squid.r -= 1;

        gambs.shift();
      }
    }
  }

  function checkStar() {
    for (let t of stars) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        life.increase();
        difficultyLure += 0.0005;
        stars.shift();
      }
    }
  }

  function checkCarrot() {
    for (let t of carrots) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        squid.r -= 10;
        difficultyLure += 0.0005;
        carrots.shift();
      }
    }
  }

  function checkFood() {
    for (let t of fishs) {
      t.move();
      t.show();
      if (squid.hits(t)) {
        score.increase();
        difficultyFood += 0.00025;
        squid.r += 0.5;
        fishs.shift();
        if (squid.r > 200) {
          difficultyStar = 0.003;
        }
      }
    }
  }

  function checkLife() {
    if (life.value === 0 || life.value < 0) {
      squid.r = 0.1;
      lures = [];
      fishs = [];
      stars = [];
      sharks = [];
      gambs = [];
      dolphins = [];

      noLoop();

      changeBackground(b2Img);

      utilities.showGameOver();

      console.log("Game Over");
    }
  }

  function checkLevel() {
    if (score.value === 20) {
      squid.r = 0.1;
      lures = [];
      fishs = [];
      stars = [];
      sharks = [];
      gambs = [];
      dolphins = [];

      noLoop();

      level = 2;

      setup();

      loop();
    }
  }

  function changeBackground(bkImage) {
    background(bkImage);
  }

  changeBackground(bImg);

  checkFood();

  checkCollision();

  checkSharkCollision();

  checkGambCollision();

  checkStar();

  checkCarrot();

  checkLife();

  checkLevel();

  life.show();
  score.show();

  squid.show();
  squid.move();
}
