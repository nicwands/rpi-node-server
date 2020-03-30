import express from 'express';
const router = express.Router();

import { createFolder, deleteFolder } from "../controllers/folderController";
import { verifyToken } from "../utils/authUtil";

router.post('/create', verifyToken, createFolder);
router.post('/delete', verifyToken, deleteFolder);

export default router;