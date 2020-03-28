import express from 'express';
const router = express.Router();

import { validate } from "../controllers/loginController";

router.post('/', validate);

export default router;