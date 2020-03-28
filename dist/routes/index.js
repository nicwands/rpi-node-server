"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _indexRouter = _interopRequireDefault(require("./indexRouter"));

var _uploadRouter = _interopRequireDefault(require("./uploadRouter"));

var _deleteRouter = _interopRequireDefault(require("./deleteRouter"));

var _folderRouter = _interopRequireDefault(require("./folderRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/', _indexRouter["default"]);
router.use('/upload', _uploadRouter["default"]);
router.use('/delete', _deleteRouter["default"]);
router.use('/folder', _folderRouter["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map