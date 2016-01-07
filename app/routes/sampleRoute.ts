import restify = require('restify');
import sampleRouteController from '../controllers/SampleRouteController'

function sampleRoute(api:restify.Server) {
  let routeCtrl = new sampleRouteController();
  api.get('/api/ping', routeCtrl.get);
}

module.exports.routes = sampleRoute;