"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _deleteController = require("../controllers/deleteController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

// import { verifyToken } from "../utils/authUtil";
router.post('/', _deleteController.deleteFile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=deleteRouter.js.map