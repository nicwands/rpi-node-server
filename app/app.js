import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import RateLimit from 'express-rate-limit';

let limiter = new RateLimit({
	windowMs: 15*60*100,
	max: 100,
	delayMs: 0,
	message: 'Too many requests, please try again later'
});

import routes from './routes';

const app = express();

app.set('view engine', 'pug');
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('uploads'));
app.use(express.static('public'));
app.use(cors({
	origin: [
		`${process.env.FRONT_URL}`,
		'http://localhost:3000/',
		'http://10.0.0.79/',
		'http://10.0.0.79:3000/'
	],
	credentials: true
}));
app.use(fileUpload());
app.use(limiter);

// Hook up all routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;
