"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIndex = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _getFolderSize = _interopRequireDefault(require("get-folder-size"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getIndex = function getIndex(req, res) {
  var clientIp = req.connection.remoteAddress;
  var fileList = [];
  var fileNames;

  if (req.params[0]) {
    fileNames = _fs["default"].readdirSync('./uploads/' + req.params[0]);

    for (var i = 0; i < fileNames.length; i++) {
      var tempObj = {};
      var filePath = "/" + req.params[0] + "/" + fileNames[i];
      tempObj['name'] = fileNames[i];
      tempObj['path'] = filePath;

      if (["jpg", "png", "jpeg"].includes(fileNames[i].split('.').pop().toLowerCase())) {
        tempObj['thumbpath'] = (clientIp.startsWith("10.") ? process.env.LOCAL_IP : process.env.FRONT_URL) + 'thumbnails/THUMB-' + fileNames[i];
      }

      fileList.push(tempObj);
    }
  } else {
    var _fileNames = _fs["default"].readdirSync('./uploads');

    var cleanFiles = _fileNames.filter(function (file) {
      return file !== ".gitkeep" && file !== ".DS_Store" && file !== "thumbnails";
    });

    for (var _i = 0; _i < cleanFiles.length; _i++) {
      var _tempObj = {};
      _tempObj['name'] = cleanFiles[_i];
      _tempObj['path'] = cleanFiles[_i];

      if (["jpg", "png", "jpeg"].includes(cleanFiles[_i].split('.').pop().toLowerCase())) {
        _tempObj['thumbpath'] = 'thumbnails/THUMB-' + cleanFiles[_i];
      }

      fileList.push(_tempObj);
    }
  }

  var spaceUsedMB = 0;
  (0, _getFolderSize["default"])('./uploads', function (err, size) {
    if (err) {
      throw err;
    }

    spaceUsedMB = (size / 1024 / 1024).toFixed(2);
    res.render('index', {
      fileList: fileList,
      path: req.params[0],
      host: clientIp.startsWith("10.") ? process.env.LOCAL_IP : process.env.FRONT_URL,
      spaceUsedMB: spaceUsedMB,
      spaceAvailable: process.env.SPACE_AVAILABLE
    });
  });
};

exports.getIndex = getIndex;
//# sourceMappingURL=indexController.js.map