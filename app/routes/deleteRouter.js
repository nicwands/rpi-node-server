import express from 'express';
const router = express.Router();

import { deleteFile } from "../controllers/deleteController";
// import { verifyToken } from "../utils/authUtil";

router.post('/', deleteFile);

export default router;