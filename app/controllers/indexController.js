// import fs from 'fs';
import con from "../utils/db";

export const getIndex = (req, res) => {
    // let files = [];

    const queryString = 'SELECT * FROM file\n' +
        'JOIN directory on directory.id = file.directory_id\n' +
        'WHERE directory_id = ?;';
    con.query(queryString, [1], function (err, rows, fields) {
        let files = rows;
        con.query("SELECT * from directory where parent is ?", [rows[0].parent], (err, rows, fields) => {
            res.render('index', {
                files: files,
                folders: rows
            });
        });

        // let array = [];
        // for (let i = 0; i < rows.length; i++) {
        //     array.push(rows[i].name);
        // }
        //
        // for (let i = 0; i < array.length; i++) {
        //     let tempObj = {};
        //
        //     tempObj['name'] = array[i];
        //     tempObj['path'] = array[i];
        //
        //     console.log({tempObj});
        //
        //     files.push(tempObj);
        // }
    });
};