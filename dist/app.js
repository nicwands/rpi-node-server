"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var limiter = new _expressRateLimit["default"]({
  windowMs: 15 * 60 * 100,
  max: 100,
  delayMs: 0,
  message: 'Too many requests, please try again later'
});
var app = (0, _express["default"])();
app.set('view engine', 'pug');
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"]('uploads'));
app.use(_express["default"]["static"]('public'));
app.use((0, _cors["default"])({
  origin: ["".concat(process.env.FRONT_URL), 'http://localhost:3000/', 'http://10.0.0.79/', 'http://10.0.0.79:3000/'],
  credentials: true
}));
app.use((0, _expressFileupload["default"])());
app.use(limiter); // Hook up all routes

app.use('/', _routes["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map