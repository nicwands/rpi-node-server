import path from "path";
import fs from 'fs';
import appRoot from 'app-root-path';

export const deleteFile = (req, res) => {
    console.log("deleting ", req.body.file);
    fs.unlinkSync(path.join(appRoot.path, "uploads/", req.body.file));
    res.redirect('/');
};