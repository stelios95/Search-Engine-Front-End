const express = require("express");
const port = process.env.PORT || 8081;
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");