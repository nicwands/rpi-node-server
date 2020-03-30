import multer from 'multer';
import appRoot from 'app-root-path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, (appRoot + 'uploads/'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

export default upload;