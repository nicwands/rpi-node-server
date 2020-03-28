import express from 'express';
const router = express.Router();

import { getLogin } from "../controllers/loginController";

router.get('/', getLogin);

export default router;