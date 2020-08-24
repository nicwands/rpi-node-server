"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _indexRouter = _interopRequireDefault(require("./indexRouter"));

var _loginRouter = _interopRequireDefault(require("./loginRouter"));

var _fileRouter = _interopRequireDefault(require("./fileRouter"));

var _folderRouter = _interopRequireDefault(require("./folderRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/', _indexRouter["default"]);
router.use('/login', _loginRouter["default"]);
router.use('/file', _fileRouter["default"]);
router.use('/folder', _folderRouter["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map