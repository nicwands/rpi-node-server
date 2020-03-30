"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _appRootPath = _interopRequireDefault(require("app-root-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deleteFile = function deleteFile(req, res) {
  console.log("deleting ", req.body.file);

  _fs["default"].unlinkSync(_path["default"].join(_appRootPath["default"].path, "uploads/", req.body.file));

  res.redirect('/');
};

exports.deleteFile = deleteFile;
//# sourceMappingURL=deleteController.js.map