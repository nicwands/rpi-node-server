import express from 'express';
const router = express.Router();

import { getIndex } from "../controllers/indexController";
import { verifyToken } from "../utils/authUtil";

router.get('/', verifyToken, getIndex);

export default router;