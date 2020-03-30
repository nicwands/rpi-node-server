import express from 'express';
const router = express.Router();

import { uploadFile } from "../controllers/fileController";
import { deleteFile } from "../controllers/fileController";
import { verifyToken } from "../utils/authUtil";
// import upload from '../utils/uploadMiddleware';
// const upload1 = upload.single('file');

router.post('/upload', verifyToken, uploadFile);
router.post('/delete', verifyToken, deleteFile);

export default router;