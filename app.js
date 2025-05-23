/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const sanitizeHtml = require('sanitize-html');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const bookingController = require('./controllers/bookingController');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.enable('trust proxy');

// telling express we are using pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// global middleware
// Implement CORS
app.use(cors());
app.options('*', cors());
//serving static files
app.use(express.static(path.join(__dirname, 'public')));
// Set security HTTP headers
app.use(helmet());

// Set Content Security Policy (CSP) using Helmet
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Allow resources to be loaded only from the same origin
      scriptSrc: [
        "'self'",
        'https://api.mapbox.com',
        'https://cdnjs.cloudflare.com',
        'https://cdn.jsdelivr.net',
        'https://unpkg.com',
        'https://cdn.skypack.dev',
        'https://js.stripe.com',
      ], // Allow scripts from the same origin and Mapbox
      styleSrc: [
        "'self'",
        'https://fonts.googleapis.com',
        'https://api.mapbox.com',
      ], // Allow styles from the same origin, Google Fonts and Allow Mapbox CSS
      styleSrcElem: [
        "'self'",
        'https://fonts.googleapis.com',
        'https://api.mapbox.com',
      ], // Allow external stylesheets (including Mapbox)
      fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from Google Fonts
      imgSrc: ["'self'", 'data:', 'https://api.mapbox.com'], // Allow images from the same origin, data URLs, and Mapbox
      connectSrc: [
        "'self'",
        'https://api.mapbox.com',
        'https://events.mapbox.com',
      ], // Allow connections to Mapbox API
      frameSrc: ['https://js.stripe.com'], // Disallow embedding of the site in iframes
      objectSrc: ["'none'"], // Disallow Flash, Java, or other plugin-based content
      baseUri: ["'self'"], // Allow base URI to be from the same origin
      formAction: ["'self'"], // Allow form submission to the same origin
      workerSrc: ["'self'", 'blob:', 'https://api.mapbox.com'], // Allow Web Workers from blob URLs and Mapbox
    },
  }),
);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowsMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Stripe webhook, BEFORE body-parser, because stripe needs the body as stream
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  bookingController.webhookCheckout,
);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use((req, res, next) => {
  if (req.body.comment) {
    req.body.comment = sanitizeHtml(req.body.comment);
  }
  if (req.body.description) {
    req.body.description = sanitizeHtml(req.body.description);
  }
  next();
});

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

app.use(compression());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) Routes
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
