import Koa from 'koa';
import json from 'koa-json';
import logger from 'koa-logger';
import servestatic from 'koa-static';
import path from 'path';
import _debug from 'debug';
import config from './config';
import routes from './routes';

var app = Koa();
var debug = _debug('app:server');
var error = _debug('app:error');

// -----------------------------------------------------------------------------
// Middlewares
// -----------------------------------------------------------------------------
app.use(json());
app.use(logger());

// -----------------------------------------------------------------------------
// Apply routes
// -----------------------------------------------------------------------------
routes(app);

// -----------------------------------------------------------------------------
// Error handling
// -----------------------------------------------------------------------------
app.on('error', function(err){
    error('server error');
});

// -----------------------------------------------------------------------------
// Serve static pages
// -----------------------------------------------------------------------------
app.use(servestatic(path.join(__dirname, config.publicFolder)));

// -----------------------------------------------------------------------------
// Start the server
// -----------------------------------------------------------------------------
debug(`Started server http://localhost:${config.port}`);
app.listen(config.port);
