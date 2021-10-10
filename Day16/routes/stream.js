const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/video", function (req, res) {
  const range = req.headers.range;

  // Ensure there is a range given for the video
  if (!range) {
    res.status(400).send("Requires range header");
  }

  // get video stats (about 22MB)
  const videoPath = path.join(
    __dirname,
    "../public/video/endeavor_vs_nomu.mp4"
  );

  //   D:\Devsnest\Devsnest-Backend\Day-16\public\video\endeavor_vs_nomu.mp4.mp4
  const videoSize = fs.statSync(videoPath).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 * 6 * 4; // 4 MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start} - ${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // https status 206 for partial headers
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // stream the video chunk to client
  videoStream.pipe(res);
});

module.exports = router;
