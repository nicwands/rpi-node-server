"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFolder = exports.getIndex = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getIndex = function getIndex(req, res) {
  console.log("fetching index");

  var files = _fs["default"].readdirSync('./uploads');

  var cleanFiles = files.filter(function (file) {
    return file !== ".gitkeep";
  });
  res.render('index', {
    fileList: cleanFiles
  });
};

exports.getIndex = getIndex;

var getFolder = function getFolder(req, res) {
  console.log(req.body);
  console.log("fetching folder " + req.params.folderName);

  var files = _fs["default"].readdirSync('./uploads/' + req.params.folderName);

  res.render('index', {
    fileList: files
  });
};

exports.getFolder = getFolder;
//# sourceMappingURL=indexController.js.map