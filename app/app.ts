var fs = require('fs');
import restify = require('restify');
import {settings} from './config';
import {logger} from './logger';

var api = restify.createServer({
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


fs.readdirSync(__dirname + '/routes').forEach(function(routeConfig:string) {
  if (routeConfig.substr(-3) === '.js') {
    var route = require(__dirname + '/routes/' + routeConfig);
    route.routes(api);
  }
});

api.listen(settings.port, function() {
  console.log(`INFO: ${settings.name} is running at ${api.url}`);
});