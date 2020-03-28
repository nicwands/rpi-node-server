import express from 'express';
const router = express.Router();

import { deleteFile } from "../controllers/deleteController";
import { verifyToken } from "../utils/authUtil";

router.post('/', verifyToken, deleteFile);

export default router;