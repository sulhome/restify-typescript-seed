import restify = require('restify');

export default class SampleRouteController {

	get(req: restify.Request, res: restify.Response, next: restify.Next) {
		res.json(200, 'pong');
		return next();
	}
}