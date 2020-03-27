const express = require('express');

const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname) //Appending .jpg
	}
});
const upload = multer({ storage: storage });

const app = express();

app.use(express.static('public'));

app.post('/', upload.single('fileUploaded'), function(req, res) {
	console.dir(req.file);
	res.sendStatus(200);
});

module.exports = app;
