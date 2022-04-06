import express, { Request, NextFunction, Response } from 'express';
import { BaseController } from '../base/base.controller';
import { IRequestWithBody } from '../../dto/user-login.dto';
import { ViewHTML } from '../../views/ViewHTML.view';

export class UserController extends BaseController {
	constructor() {
		super();
		this.bindRouters([
			{ path: '/register', methot: 'post', func: this.register },
			{ path: '/login', methot: 'get', func: this.sendForm },
			{ path: '/login', methot: 'post', func: this.login },
		]);
	}

	sendForm(req: IRequestWithBody, res: Response) {
		ViewHTML.renderForm(res);
	}

	login(req: IRequestWithBody, res: Response) {
		const { email, password } = req.body;
		res.send(`
		   <p>${email}:${password}</p>
		`);
	}

	register() {}
}
