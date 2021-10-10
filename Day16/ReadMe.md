# Day16 planing

- start server on port (5000)

- create (/stream) route,
  render a static index file on it, with a video of source link to (/stream/video)

- create (/stream/video) route
  - check if range is given for the video from req.headers.range
  - get the static videopath
  - parse the range and divide it into chunks
  - create headers to send the video
