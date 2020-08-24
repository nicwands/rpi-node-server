"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _folderController = require("../controllers/folderController");

var _authUtil = require("../utils/authUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

// router.get('/open/:folderName', verifyToken, openFolder);
router.post('/create', _authUtil.verifyToken, _folderController.createFolder);
router.post('/delete', _authUtil.verifyToken, _folderController.deleteFolder);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=folderRouter.js.map