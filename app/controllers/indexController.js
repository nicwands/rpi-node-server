import fs from 'fs';
import jwt from "jsonwebtoken";

export const getIndex = (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            console.log("Invalid token");
            res.sendStatus(403);
        } else {
            console.log("fetching index");
            const files = fs.readdirSync('./uploads');
            const cleanFiles = files.filter(function(file) {
                return file !== ".gitkeep"
            });
            res.render('index', {
                fileList: cleanFiles
            });
        }
    });
};

export const getFolder = (req, res) => {
    console.log(req.body);
    console.log("fetching folder " + req.params.folderName);
    const files = fs.readdirSync('./uploads/' + req.params.folderName);
    res.render('index', {
        fileList: files
    });
};