import React from 'react';
import ReactDOM from 'react-dom';

import { registerSW } from './serviceworker';

import AppContainer from './app.container';

registerSW();

const App = () => {
	return <AppContainer />;
};

ReactDOM.render(<App />, document.querySelector('#app'));
