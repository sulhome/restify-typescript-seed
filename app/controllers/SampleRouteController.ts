import * as restify from 'restify';
import { logger } from '../services/logger';

export default class SampleRouteController {
	public get(req: restify.Request, res: restify.Response, next: restify.Next) {
		logger.info('accessing ping route');
		res.json(200, 'pong');
		return next();
	}
}