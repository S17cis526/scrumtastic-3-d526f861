module.exports = auth;

function auth(req, res, next) {
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', [
    "quote=cookies%20are%20for%20me;",
    "sessionid=212;Expires=Wed, 09, Jun 2021 10:18:14 GMT",
    "safe=value;HttpOnly"
  ]);

  next(req, res);
}
