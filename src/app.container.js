import React from 'react';
import { JssProvider, useTheme, ThemeProvider } from 'react-jss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginRoute from './routes/login';
import AppStyle from './jss';
import AppHeader from './components/AppHeader';
import HomeRoute from './routes/home';

const AccoutRoute = () => {
	return (
		<div>
			<p>
				<span>/Account</span>
			</p>

			<p>
				<Link to="/">Home</Link>
			</p>

			<p>
				<Link to="/login">Login</Link>
			</p>

			<p>
				<Link to="/account">Account</Link>
			</p>
		</div>
	);
};

const AppContainer = () => {
	return (
		<JssProvider id={{ minify: true }}>
			<ThemeProvider theme={AppStyle.appTheme}>
				<AppInner />
			</ThemeProvider>
		</JssProvider>
	);
};

const AppMain = ({ children }) => {
	const classes = AppStyle.main();

	return (
		<main className={classes.container}>
			<div className={classes.wrapper}>{children}</div>
		</main>
	);
};

const AppFooter = () => {
	return <footer style={{ height: 50, boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.24)' }}></footer>;
};

const AppInner = () => {
	const classes = AppStyle.base();

	return (
		<Router>
			<AppHeader />

			<AppMain>
				<Switch>
					<Route path="/" exact component={HomeRoute} />
					<Route path="/login" exact component={LoginRoute} />
					<Route path="/account" exact component={AccoutRoute} />
				</Switch>
			</AppMain>

			<AppFooter />
		</Router>
	);
};

export default AppContainer;
