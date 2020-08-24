"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFolder = exports.createFolder = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _appRootPath = _interopRequireDefault(require("app-root-path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createFolder = function createFolder(req, res) {
  // if (req.body.currentFolder.length > 0) {
  //     const folderPath = path.join(appRoot.path, "uploads/", req.body.currentFolder, req.body.folderName);
  //     console.log(folderPath);
  //     fs.mkdirSync(folderPath, { recursive: true });
  // }
  var fullPath = _appRootPath["default"].path + "/uploads/" + req.body.path + req.body.folderName;
  console.log("adding folder ", fullPath);

  _fs["default"].mkdirSync(_path["default"].join(fullPath), {
    recursive: true
  });

  res.sendStatus(200);
};

exports.createFolder = createFolder;

var deleteFolder = function deleteFolder(req, res) {
  console.log("removing folder ", req.body.folderName);
  var folderPath = _appRootPath["default"].path + "/uploads/" + req.body.folderName;

  if (_fs["default"].existsSync(folderPath)) {
    _fs["default"].readdirSync(folderPath).forEach(function (file, index) {
      var curPath = _path["default"].join(folderPath, file);

      if (_fs["default"].lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        _fs["default"].unlinkSync(curPath);
      }
    });

    _fs["default"].rmdirSync(folderPath);

    res.sendStatus(200);
  }
};

exports.deleteFolder = deleteFolder;
//# sourceMappingURL=folderController.js.map