import express from 'express';
const router = express.Router();
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage });

import { uploadFile } from "../controllers/uploadController";
import { verifyToken } from "../utils/authUtil";

router.post('/', verifyToken, upload.single('fileUploaded'), uploadFile);

export default router;