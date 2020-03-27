const express = require('express');
const pug = require('pug');

const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
});
const upload = multer({ storage: storage });

const app = express();

app.set('view engine', 'pug');
app.use(express.static('uploads'));

app.get('/', function (req, res) {
	res.render('index', { name: "test" })
});

app.post('/', upload.single('fileUploaded'), function(req, res) {
	console.dir(req.file);
	res.render('index', {
		name: req.file.originalname
	})
});

module.exports = app;
