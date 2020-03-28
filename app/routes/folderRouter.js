import express from 'express';
const router = express.Router();

import { createFolder } from "../controllers/folderController";
// import { verifyToken } from "../utils/authUtil";

router.post('/create', createFolder);

export default router;