"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _indexController = require("../controllers/indexController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

// import { verifyToken } from "../utils/authUtil";
router.get('/', _indexController.getIndex);
router.get('/:folderName', _indexController.getFolder);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=indexRouter.js.map