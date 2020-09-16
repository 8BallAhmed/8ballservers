const express = require("express");
const fs = require("fs");
const moment = require("moment");

var downloads1 = 0;
var downloads2 = 0;
var downloads3 = 0;

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Port started at ${PORT}`);
});

app.get("/techmasters/ep1/", (req, res) => {
  console.log(`Techmasters Podcast EP2 Downloaded, ${moment().format()}\n`);
  fs.appendFile(
    "./techmasters/downloadLog.txt",
    `Techmasters Podcast EP1 Downloaded, ${moment().format()}\n`,
    (err) => {
      if (err) throw err;
    }
  );
  downloads1 = downloads1 = 1;
  res.download(__dirname + "/techmasters/ep1/tech_masters_podcast1.mp3");
});

app.get("/techmasters/ep2", (req, res) => {
  fs.appendFile(
    "./techmasters/downloadLog.txt",
    `Techmasters Podcast EP2 Downloaded, ${moment().format()}\n`,
    (err) => {
      if (err) throw err;
    }
  );
  downloads2 = downloads2 + 1;
  res.download(__dirname + "/techmasters/ep2/tech_masters_podcast2.mp3");
});

app.get("/techmasters/ep3", (req, res) => {
  fs.appendFile(
    "./techmasters/downloadLog.txt",
    `Techmasters Podcast EP3 Downloaded, ${moment().format()}\n`,
    (err) => {
      if (err) throw err;
    }
  );
  downloads3 = downloads3 + 1;
  res.download(__dirname + "/techmasters/ep3/tech_masters_podcast3.mp3");
});
