import express from 'express';
const router = express.Router();

import { openFolder, createFolder, deleteFolder } from "../controllers/folderController";
import { verifyToken } from "../utils/authUtil";

router.get('/open/:folderName', verifyToken, openFolder);
router.post('/create', verifyToken, createFolder);
router.post('/delete', verifyToken, deleteFolder);

export default router;