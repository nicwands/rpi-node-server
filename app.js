const express = require('express');
const pug = require('pug');
const fs = require('fs');

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
	const files = fs.readdirSync('./uploads');
	const cleanFiles = files.filter(function(file) {
		return file !== ".gitkeep"
	});
	res.render('index', {
		fileList: cleanFiles,
		name: "test"
	});
});

app.post('/upload', upload.single('fileUploaded'), function(req, res) {
	console.dir(req.file);
	res.redirect('/');
});

app.post('/new-folder', function (req, res) {
	console.log(req.body);
	res.redirect('/')
});

module.exports = app;
