import express, { Express } from 'express';
import { Server } from 'http';
import cookieSession from 'cookie-session';
import { UserController } from './controllers/user/user.controller';

export class App {
	app: Express;
	server: Server;
	port: number;
	userController: UserController;

	constructor(userController: UserController) {
		this.app = express();
		this.port = 8000;
		this.userController = userController;
	}

	useMidleWare(): void {
		this.app.use(express.urlencoded({ extended: true }));
	}

	useCookieParser(): void {
		this.app.use(cookieSession({ keys: ['asfadsfadfs'] }));
	}

	useRouters(): void {
		this.app.use('/users', this.userController.router);
	}

	public async init(): Promise<void> {
		this.useMidleWare();
		this.useRouters();
		this.server = this.app.listen(this.port, () => {
			console.log(`🚀 Server ready at http://localhost:${this.port}`);
		});
	}
}
