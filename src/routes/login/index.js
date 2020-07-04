import React from 'react';

import TextField from '../../components/TextField';
import { PrimaryButton } from '../../components/buttons';

const LoginRoute = (props) => {
	const [state, setState] = React.useState({ strLogin: '', strPwd: '' });

	const onChange = (e) => {
		e.persist();

		var id = e.target.id;

		setState((state) => ({ ...state, [id]: e.target.value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(state);
	};

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ padding: '0 20px', margin: 'auto', maxWidth: '100%' }}>
				<h3 style={{ margin: '40px 0', fontSize: 25, fontWeight: 500 }}>Login</h3>

				<form style={{ width: 410, maxWidth: '100%', margin: 'auto' }}>
					<TextField label="Login" id="strLogin" value={state.strLogin} onChange={onChange} />

					<TextField
						label="Senha"
						id="strPwd"
						value={state.strPwd}
						placeholder="Digite sua senha"
						type="password"
						onChange={onChange}
					/>

					<div>
						<PrimaryButton onClick={onSubmit} label="Confirmar" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginRoute;
