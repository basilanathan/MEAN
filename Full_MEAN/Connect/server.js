var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
  console.log(req.method, req.url);

  next();
};

var helloWorld = function(req, res, next) {
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World');
};

var goodbyeWorld = function (req, res, next) {
  res.setHeader('Content-type', 'text/plain');
  res.end('Goodbye World');
}

app.use(logger);
app.use('/hello' ,helloWorld);
app.use('/goodbye' ,goodbyeWorld);

app.listen(3000);

console.log('server running on port 3000');
