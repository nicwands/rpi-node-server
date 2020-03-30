import express from 'express';
const router = express.Router();

import indexRouter from './indexRouter';
import loginRouter from './loginRouter';
import fileRouter from './fileRouter';
import folderRouter from './folderRouter';

router.use('/', indexRouter);
router.use('/login', loginRouter);
router.use('/file', fileRouter);
router.use('/folder', folderRouter);

export default router;