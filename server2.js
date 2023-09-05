const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')
const express = require("express");

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({dev, hostname, port})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Now serving on localhost:3000");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
})