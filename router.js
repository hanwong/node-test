var fs = require("fs");
var renderer = require("./renderer");

function home (req, res) {
  if(req.url === "/"){
    return renderer(req, res, "home", {});
  }
}

function detail (req, res) {
  var detailId = req.url.replace("/", "");
  if (detailId.length > 0) {
    res.write(detailId);
    res.end();
  } 
}

module.exports.home = home;
module.exports.detail = detail;


