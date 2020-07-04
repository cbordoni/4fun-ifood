import React from 'react';
import AppStyle from '../../jss';

const HomeRoute = (props) => {
	const [state, setState] = React.useState({ data: [] });
	const classes = AppStyle.carousel();

	React.useEffect(() => {
		fetch('/api/home')
			.then((e) => e.json())
			.then((e) => {
				setState((state) => ({ ...state, data: e.data }));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (!state.data.length) {
		return <div>Carregando</div>;
	}

	return (
		<div className={classes.container}>
			<div className={classes.inner} style={{ gridTemplateColumns: `repeat(${state.data.length}, 115px)` }}>
				{state.data.map((e, i) => {
					return (
						<div key={i} className={classes.item}>
							<div className={classes.wrapper}>
								<figure className={classes.figure}>
									<img src={e.img} className={classes.img} />
								</figure>

								<span className={classes.label}>{e.name}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomeRoute;
