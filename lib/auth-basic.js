
module.exports = authenticate;

function authenticate(req, res, next) {
  var auth = req.headers.authorization;
  if(auth) {
    var b = new Buffer(auth.split(' ')[1], 'base64');
    var s = b.toString();
    var credentials = s.split(':');
    var username = credentials[0];
    var password = credentials[1];

    // TODO: Check that the username/password pair is good
    console.log(username, password);

    if(username == "bob" && password == "hope") {
      next(req, res);
    } else {
      res.statusCode = 401;
      res.statusMessage = "Unathorized";
      res.end("Unauthorized");
    }
  } else {
    res.writeHead(401, {'WWW-Authenticate':'Basic'});
    res.end();
  }
}
