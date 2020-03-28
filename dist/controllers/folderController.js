"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFolder = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _appRootPath = _interopRequireDefault(require("app-root-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createFolder = function createFolder(req, res) {
  console.log("adding folder ", req.body.folderName);

  if (req.body.currentFolder.length > 0) {
    var folderPath = _path["default"].join(_appRootPath["default"].path, "uploads/", req.body.currentFolder, req.body.folderName);

    console.log(folderPath);

    _fs["default"].mkdirSync(folderPath, {
      recursive: true
    });
  }

  _fs["default"].mkdirSync(_path["default"].join(_appRootPath["default"].path, "uploads/", req.body.folderName), {
    recursive: true
  });

  res.redirect('/');
};

exports.createFolder = createFolder;
//# sourceMappingURL=folderController.js.map