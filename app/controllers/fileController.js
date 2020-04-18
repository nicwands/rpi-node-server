import path from "path";
import fs from 'fs';
import appRoot from 'app-root-path';
import createThumbnail from '../utils/thumbnail'

export const uploadFile = (req, res) => {
    const fileCount = parseInt(req.body.count);
    for (let i = 0; i < fileCount; i++) {
        const currentFile = "file_" + i;
        const file = req.files[currentFile];
        const path = appRoot + "/uploads/" + req.body.path + file.name;
        file.mv(path, (err) => {
            console.error(err);
        });
        if (["jpg", "png", "jpeg"].includes(file.name.split('.').pop().toLowerCase())) {
            createThumbnail(file.data, file.name);
        }
    }
    res.sendStatus(200);
};

export const deleteFile = (req, res) => {
    console.log("deleting ", req.body.fileName);
    fs.unlinkSync(path.join(appRoot.path, "uploads/", req.body.fileName));
    if (["jpg", "png", "jpeg"].includes(req.body.fileName.split('.').pop().toLowerCase())) {
        const thumbPath = path.join(appRoot.path, "uploads/thumbnails/", "THUMB-" + req.body.fileName.split('/').pop())
        fs.unlinkSync(thumbPath);
    }
    res.redirect('/');
};