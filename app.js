var http = require("http");
var router = require("./router");

var app = http.createServer( function (req, res) {
  console.log(req.url);
  
  router.home(req, res);
  router.detail(req, res);

});

app.listen(9900, function (){
  console.log("Server is Running at localhost:9900");
});

