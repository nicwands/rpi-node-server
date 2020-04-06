import fs from 'fs';

export const getIndex = (req, res) => {
    let fileList = [];
    let fileNames;
    if (req.params[0]) {
        fileNames = fs.readdirSync('./uploads/' + req.params[0]);

        for (let i = 0; i < fileNames.length; i++) {
            let tempObj = {};
            const filePath = ("/" + req.params[0] + "/" + fileNames[i]);

            tempObj['name'] = fileNames[i];
            tempObj['path'] = filePath;

            fileList.push(tempObj);
        }
    } else {
        const fileNames = fs.readdirSync('./uploads');
        const cleanFiles = fileNames.filter((file) => {
            return file !== ".gitkeep" && file !== ".DS_Store";
        });

        for (let i = 0; i < cleanFiles.length; i++) {
            let tempObj = {};

            tempObj['name'] = cleanFiles[i];
            tempObj['path'] = cleanFiles[i];

            fileList.push(tempObj);
        }
    }

    res.render('index', {
        fileList,
        path: req.params[0],
        host: process.env.FRONT_URL
    });
};