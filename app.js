const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
//const port = 8080;

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/sketch.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/sketch.js"));
});

router.get("/lure.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/lure.js"));
});

router.get("/squid.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/squid.js"));
});

router.get("/score.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/score.js"));
});

router.get("/life.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/life.js"));
});

router.get("/fish.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/fish.js"));
});

router.get("/star.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/star.js"));
});

router.get("/shark.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/shark.js"));
});

router.get("/gamb.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/gamb.js"));
});

router.get("/ink.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/ink.js"));
});

router.get("/monster.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/monster.js"));
});

router.get("/carrot.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/carrot.js"));
});

router.get("/utilities.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/utilities.js"));
});

router.get("/level_1.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/level_1.js"));
});

router.get("/level_2.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/level_2.js"));
});

app.use(express.static("images"));

app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
/*
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is up on port 8080`);
});
*/
