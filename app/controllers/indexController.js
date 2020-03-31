import fs from 'fs';

export const getIndex = (req, res) => {
    let files = [];
    let fileNames;
    if (req.params.folderName) {
        fileNames = fs.readdirSync('./uploads/' + req.params.folderName);

        for (let i = 0; i < fileNames.length; i++) {
            let tempObj = {};
            const filePath = ("/" + req.params.folderName + "/" + fileNames[i]);

            tempObj['name'] = fileNames[i];
            tempObj['path'] = filePath;

            files.push(tempObj);
        }
    } else {
        const fileNames = fs.readdirSync('./uploads');
        const cleanFiles = fileNames.filter((file) => {
            return file !== ".gitkeep"
        });

        for (let i = 0; i < cleanFiles.length; i++) {
            let tempObj = {};

            tempObj['name'] = cleanFiles[i];
            tempObj['path'] = cleanFiles[i];

            files.push(tempObj);
        }
    }

    res.render('index', {
        fileList: files
    });
};