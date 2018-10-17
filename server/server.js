var path = require("path");
var fs = require("fs");

var chirpsPath = path.join(__dirname, "/../chirps.json");

var chirps = fs.readFile(chirpsPath, (err, data) => {
  console.log(data.toString());
});
