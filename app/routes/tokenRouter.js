import express from 'express';
const router = express.Router();

import { getToken } from "../controllers/tokenController";

router.post('/', getToken);

export default router;