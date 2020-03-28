import express from 'express';
const router = express.Router();

import indexRouter from './indexRouter';
import uploadRouter from './uploadRouter';
import deleteRouter from './deleteRouter';
import folderRouter from './folderRouter';

router.use('/', indexRouter);
router.use('/upload', uploadRouter);
router.use('/delete', deleteRouter);
router.use('/folder', folderRouter);

export default router;