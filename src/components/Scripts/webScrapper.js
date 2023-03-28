// const express = require("express");
// const cheerio = require("cheerio");
// const download = require("node-image-downloader");
// const request = require("request");
// const app = express();

// app.get("/", (req, res) => {
//   var url = "https://www.ufc.com/event/ufc-287";

//   request(url, (error, response, html) => {
//     if (!error) {
//       var $ = cheerio.load(html);

//       var imagesrc = $(".layout__region layout__region--content img").attr(
//         "src"
//       );

//       //download the image

//       download({
//         imgs: [{ uri: imagesrc }],
//         dest: "../../assets/downloads",
//       }).then((info) => {
//         console.log("Download Complete");
//         process.exit(1);
//       });
//     }
//   });
// });
