import fs from 'fs';

export const getIndex = (req, res) => {
    console.log("fetching index");
    const files = fs.readdirSync('./uploads');
    const cleanFiles = files.filter(function(file) {
        return file !== ".gitkeep"
    });
    res.render('index', {
        fileList: cleanFiles
    });
};

export const getFolder = (req, res) => {
    console.log(req.body);
    console.log("fetching folder " + req.params.folderName);
    const files = fs.readdirSync('./uploads/' + req.params.folderName);
    res.render('index', {
        fileList: files
    });
};