import { Router, Response } from 'express';
import { IControllerRoute } from './rout.interface';

export abstract class BaseController {
	private readonly _router: Router;

	constructor() {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	public send<T>(res: Response, code: number, message: T) {
		res.status(code);
		return res.type('application/json').json(message);
	}

	public ok<T>(res: Response, message: T) {
		return this.send<T>(res, 200, message);
	}

	public created(res: Response) {
		return res.sendStatus(201);
	}

	protected bindRouters(routers: IControllerRoute[]) {
		for (const router of routers) {
			console.log(`[${router.methot}] ${router.path}`);
			const handler = router.func.bind(this);
			this.router[router.methot](router.path, handler);
		}
	}
}
