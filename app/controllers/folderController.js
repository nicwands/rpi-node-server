import path from "path";
import fs from 'fs';
import appRoot from 'app-root-path';

export const createFolder = (req, res) => {
    // if (req.body.currentFolder.length > 0) {
    //     const folderPath = path.join(appRoot.path, "uploads/", req.body.currentFolder, req.body.folderName);
    //     console.log(folderPath);
    //     fs.mkdirSync(folderPath, { recursive: true });
    // }
    const fullPath = appRoot.path + "/uploads/" + req.body.path + req.body.folderName;
    console.log("adding folder ", fullPath);
    fs.mkdirSync(path.join(fullPath), { recursive: true });
    res.sendStatus(200);
};

export const deleteFolder = (req, res) => {
    console.log("removing folder ", req.body.folderName);
    const folderPath = appRoot.path + "/uploads/" + req.body.folderName;

    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file, index) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
        res.sendStatus(200);
    }
};