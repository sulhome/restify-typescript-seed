import * as fs from 'fs';
import * as restify from 'restify';
import { settings } from './config/config';
import { logger } from './services/logger';

export let api = restify.createServer({
  name: settings.name
});

restify.CORS.ALLOW_HEADERS.push('authorization');
api.use(restify.CORS());
api.pre(restify.pre.sanitizePath());
api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.authorizationParser());
api.use(restify.fullResponse());


fs.readdirSync(__dirname + '/routes').forEach(function (routeConfig: string) {
  if (routeConfig.substr(-3) === '.js') {
    let route = require(__dirname + '/routes/' + routeConfig);
    route.routes(api);
  }
});

api.listen(settings.port, function () {
  logger.info(`INFO: ${settings.name} is running at ${api.url}`);
});
