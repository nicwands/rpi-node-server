import fs from 'fs';

export const getIndex = (req, res) => {
    const files = fs.readdirSync('./uploads');
    const cleanFiles = files.filter(function(file) {
        return file !== ".gitkeep"
    });
    let fileList = [];

    for (let i = 0; i < cleanFiles.length; i++) {
        let tempObj = {};
        console.log("type:: ", typeof cleanFiles[i]);

        tempObj['name'] = cleanFiles[i];
        tempObj['path'] = cleanFiles[i];

        fileList.push(tempObj);
    }
    res.render('index', {
        fileList
    });
};