import { Response } from 'express';

export class ViewHTML {
	static renderForm(res: Response): void {
		res.send(`
		   <div>
		      <form method="post">
			     <label>Введите свой e-mail</label>
				 <input type="email" name="email" />
                 <label>Введите пароль</label>
				 <input type="password" name="password" />
                 <button type="submit">Войти</button>
			  </form>
		    </div>
		`);
	}
}
