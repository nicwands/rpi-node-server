"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFile = void 0;

var uploadFile = function uploadFile(req, res) {
  console.dir(req.file); // async function createThumbnail() {
  // 	const thumbnail = await thumbnnail(path.join(__dirname, "uploads/", req.file.originalname));
  // }
  // createThumbnail();

  res.redirect('/');
};

exports.uploadFile = uploadFile;
//# sourceMappingURL=uploadController.js.map