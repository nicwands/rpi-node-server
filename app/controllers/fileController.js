import con from '../utils/db';
import path from "path";
import fs from 'fs';
import appRoot from 'app-root-path';

export const uploadFile = (req, res) => {
    console.log(req.files.file.name);

    const queryString = 'INSERT INTO file (`directory_id`, `file_name`, `date_created`) VALUES (?, ?, ?)';
    con.query(queryString, [req.body.directory, req.files.file.name, new Date(Date.now())], function (err, rows, fields) {
        console.log("rows: ", rows);
        const file = req.files.file;
        const path = appRoot + "/uploads/" + file.name;

        file.mv(path, (err) => {
            console.error(err);
        });

        res.sendStatus(200);
    });

    // async function createThumbnail() {
    // 	const thumbnail = await thumbnnail(path.join(__dirname, "uploads/", req.file.originalname));
    // }
    // createThumbnail();
};

export const deleteFile = (req, res) => {
    const queryString = 'DELETE FROM file WHERE file_name = ?';
    con.query(queryString, [req.body.fileName], function (err, rows, fields) {
        console.log("deleting ", req.body.fileName);
        console.log(rows);
        fs.unlinkSync(path.join(appRoot.path, "uploads/", req.body.fileName));
        res.redirect('/');
    });
};