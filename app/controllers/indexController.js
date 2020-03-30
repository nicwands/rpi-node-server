import fs from 'fs';

export const getIndex = (req, res) => {
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
    const files = fs.readdirSync('./uploads/' + req.params.folderName);
    res.render('index', {
        fileList: files
    });
};