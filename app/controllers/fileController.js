import path from "path";
import fs from 'fs';
import appRoot from 'app-root-path';

export const uploadFile = (req, res) => {
    console.log(req.files.file.name);
    const file = req.files.file;
    const path = appRoot + "/uploads/" + file.name;

    file.mv(path, (err) => {
        console.error(err);
    });
    // async function createThumbnail() {
    // 	const thumbnail = await thumbnnail(path.join(__dirname, "uploads/", req.file.originalname));
    // }
    // createThumbnail();
    res.sendStatus(200);
};

export const deleteFile = (req, res) => {
    console.log("deleting ", req.body.fileName);
    fs.unlinkSync(path.join(appRoot.path, "uploads/", req.body.fileName));
    res.redirect('/');
};