// import path from "path";
// import fs from 'fs';
// import appRoot from 'app-root-path';
import con from "../utils/db";
import fs from "fs";
import path from "./fileController";
import appRoot from "app-root-path";

export const createFolder = (req, res) => {
    console.log("adding folder ", req.body.folderName);
    const queryString = 'INSERT INTO directory (`name`, `parent`) VALUES (?, ?)';
    con.query(queryString, [req.body.folderName, req.body.folderParent], function (err, rows, fields) {
        console.error(err);
        res.sendStatus(200);
    });
    // fs.mkdirSync(path.join(appRoot.path, "uploads/", req.body.folderName), { recursive: true });
};

export const deleteFolder = (req, res) => {
    console.log("removing folder ", req.body.id);
    // const folderPath = appRoot.path + "/uploads/" + req.body.folderName;
    //
    // if (fs.existsSync(folderPath)) {
    //     fs.readdirSync(folderPath).forEach((file, index) => {
    //         const curPath = path.join(folderPath, file);
    //         if (fs.lstatSync(curPath).isDirectory()) { // recurse
    //             deleteFolderRecursive(curPath);
    //         } else { // delete file
    //             fs.unlinkSync(curPath);
    //         }
    //     });
    //     fs.rmdirSync(folderPath);
    //     res.sendStatus(200);
    // }

    const queryString = 'DELETE FROM file WHERE directory_id = ?';
    con.query(queryString, [req.body.id], function (err, rows, fields) {
        console.error(err);
        // fs.unlinkSync(path.join(appRoot.path, "uploads/", req.body.fileName));
        con.query('DELETE FROM directory WHERE id = ?', [req.body.id], function (err, rows, fields) {
            res.sendStatus(200);
        });
    });
};