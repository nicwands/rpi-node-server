import fs from 'fs';

export const getIndex = (req, res) => {
    let clientIp = req.connection.remoteAddress;
    let fileList = [];
    let fileNames;
    if (req.params[0]) {
        fileNames = fs.readdirSync('./uploads/' + req.params[0]);

        for (let i = 0; i < fileNames.length; i++) {
            let tempObj = {};
            const filePath = ("/" + req.params[0] + "/" + fileNames[i]);

            tempObj['name'] = fileNames[i];
            tempObj['path'] = filePath;

            if (["jpg", "png", "jpeg"].includes(fileNames[i].split('.').pop().toLowerCase())) {
                tempObj['thumbpath'] = (clientIp.startsWith("10.") ? process.env.LOCAL_IP : process.env.FRONT_URL) + 'thumbnails/THUMB-' + fileNames[i]
            }

            fileList.push(tempObj);
        }
    } else {
        const fileNames = fs.readdirSync('./uploads');
        const cleanFiles = fileNames.filter((file) => {
            return file !== ".gitkeep" && file !== ".DS_Store" && file !== "thumbnails";
        });

        for (let i = 0; i < cleanFiles.length; i++) {
            let tempObj = {};

            tempObj['name'] = cleanFiles[i];
            tempObj['path'] = cleanFiles[i];

            if (["jpg", "png", "jpeg"].includes(cleanFiles[i].split('.').pop().toLowerCase())) {
                tempObj['thumbpath'] = 'thumbnails/THUMB-' + cleanFiles[i]
            }

            fileList.push(tempObj);
        }
    }

    res.render('index', {
        fileList,
        path: req.params[0],
        host: clientIp.startsWith("10.") ? process.env.LOCAL_IP : process.env.FRONT_URL
    });
};