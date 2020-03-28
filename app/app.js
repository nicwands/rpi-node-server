const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
// const thumbnnail = require('./util/thumbnail');
const path = require('path');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'));
app.use(express.static('public'));

app.get('/', function (req, res) {
	console.log("fetching index");
	const files = fs.readdirSync('./uploads');
	const cleanFiles = files.filter(function(file) {
		return file !== ".gitkeep"
	});
	res.render('index', {
		fileList: cleanFiles
	});
});

app.get('/:folderName', function (req, res) {
	console.log(req.body);
	console.log("fetching folder " + req.params.folderName);
	const files = fs.readdirSync('./uploads/' + req.params.folderName);
	res.render('index', {
		fileList: files
	});
});

app.post('/upload', upload.single('fileUploaded'), function(req, res) {
	console.dir(req.file);
	// async function createThumbnail() {
	// 	const thumbnail = await thumbnnail(path.join(__dirname, "uploads/", req.file.originalname));
	// }
	// createThumbnail();
	res.redirect('/');
});

app.post('/delete', function(req, res) {
	console.log("deleting ", req.body.file);
	fs.unlinkSync(path.join(__dirname, "uploads/", req.body.file));
	res.redirect('/');
});

app.post('/create-folder', function (req, res) {
	console.log("adding folder ", req.body.folderName);
	console.log(req.body);
	if (req.body.currentFolder.length > 0) {
		const folderPath = path.join(__dirname, "uploads/", req.body.currentFolder, req.body.folderName);
		console.log(folderPath);
		fs.mkdirSync(folderPath, { recursive: true });
	}
	fs.mkdirSync(path.join(__dirname, "uploads/", req.body.folderName), { recursive: true });
	res.redirect('/')
});

module.exports = app;