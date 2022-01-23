let lures = [];
let fishs = [];
let stars = [];
let sharks = [];
let gambs = [];
let carrots = [];
let inks = [];
let monsters = [];

let level = 1;

let uImg;
let tImg;
let bImg;
let fImg;
let sImg;
let sharkImg;
let gambImg;
let dolphinImg;
let lureImg;
let difficultyFood = 0.006;
let difficultyLure = 0.003;
let difficultyStar = 0.0005;
let difficultyShark = 0.0005;
let difficultyGamb = 0.002;
let difficultyCarrot = 0.0002;

function preload() {
  uImg = loadImage("squid.png");
  tImg = loadImage("gelfish.png");
  fImg = loadImage("fish.png");
  sImg = loadImage("star.png");
  sharkImg = loadImage("shark.png");
  gambImg = loadImage("gamb.png");
  carrotImg = loadImage("carrot.png");
  lureImg = loadImage("lure.png");
  bImg = loadImage("sea_bk.jpg");
  b2Img = loadImage("sea_bk_2.webp");
}

function setup() {
  createCanvas(1200, 700);

  squid = new Squid();

  score = new Score();

  life = new Life();

  utilities = new Utilities();
}

function keyPressed() {
  if (key == "w") {
    squid.moveUp();
  } else if (key == "s") {
    squid.moveDown();
  } else if (key == "p") {
    inks.push(new Ink(squid.x, squid.y));
  }
}

function draw() {
  if (level === 1) {
    level_1(squid.x, squid.y);
  } else if (level === 2) {
    level_2();
  }
}
