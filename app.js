const express = require('express');
const multer = require('multer');
const upload = multer({dest: './public/'});

const app = express();

app.use(express.static('public'));
//app.use(multer({dest:'./uploads/'}));

app.post('/', upload.single('fileUploaded'), function(req, res) {
	console.dir(req.file);
	res.sendStatus(200);
});

module.exports = app;
