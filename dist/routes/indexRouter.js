"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _indexController = require("../controllers/indexController");

var _authUtil = require("../utils/authUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/*', _authUtil.verifyToken, _indexController.getIndex);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=indexRouter.js.map