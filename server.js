const express = require("express");
var path =  require('path')
const app = express();

app.use(express.static("public"));

console.log("executing...");
app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});