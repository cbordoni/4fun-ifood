import { createUseStyles } from 'react-jss';

const AppStyle = {};

AppStyle.appTheme = {
	color: {
		primary: '#ea1d2c',
		accent: '',
		primaryDark: '#c2121f',
		text: '#3e3e3e',
		contrast: '#fff',
		icon: '#3e3e3e',
		info: '#717171',
		border: '#dcdcdc',
		label: '#a6a6a6',
	},
	spacement: {
		maxWidth: '1336px',
	},
};

AppStyle.base = createUseStyles((theme) => ({
	'@global': {
		'*': {
			boxSizing: 'border-box',
			outline: 'none',
		},
		body: {
			margin: 0,
			color: theme.color.text,
			fontFamily: "'Roboto', 'sans-serif'",
		},
		fieldset: {
			display: 'flex',
			flexDirection: 'column',
			padding: '4px 0',
			margin: '5px 0',
			border: 'none',
			position: 'relative',
		},
		button: {
			backgroundColor: 'transparent',
			border: 'none',
			padding: '0 10px',
			cursor: 'pointer',
			borderRadius: 4,
			fontSize: '1rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around',
		},
		svg: {
			color: theme.color.primary,
			fill: theme.color.primary,
		},
		a: {
			textDecoration: 'none',
		},
		'#app': {
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
			height: '100vh',
		},
	},
}));

AppStyle.fieldset = createUseStyles((theme) => ({
	container: {},
	wrapper: {
		position: 'relative',
		paddingTop: 15,
	},
	input: {
		color: theme.color.text,
		fontSize: 16,
		padding: '13px 20px',
		lineHeight: '20px',
		width: '100%',
		height: 40,
		padding: '1px 2px',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: 4,
		borderBottom: `1px solid ${theme.color.border}`,
	},
	label: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		margin: 'auto',
		transform: 'translateY(7px)',
		transition: '200ms',
		display: 'flex',
		alignItems: 'center',
		height: 20,
		fontSize: 14,
		color: theme.color.label,
		backgroundColor: theme.color.contrast,
		fontWeight: 300,
	},
	labelFocusIn: {
		transform: 'translateY(-21px)',
	},
	'@media (min-width: 960px)': {
		container: {
			minHeight: 73,
		},
		wrapper: {
			padding: 0,
		},
		input: {
			height: 'auto',
			padding: '13px 20px',
			border: `1px solid ${theme.color.border}`,
			fontSize: 16,
		},
		label: {
			transform: 'translateY(0)',
			left: 20,
		},
		labelFocusIn: {
			transform: 'translateY(-23px)',
			padding: 5,
			fontSize: 14,
		},
	},
}));

AppStyle.header = createUseStyles((theme) => ({
	container: {
		padding: '20px 20px 14px',
		boxShadow: `inset 0 -1px 0 ${theme.color.border}`,
	},
	wrapper: {
		display: 'flex',
		flexGrow: 1,
		height: 43,
		maxWidth: theme.spacement.maxWidth,
		margin: '0 auto',
	},
	'@media (max-width: 1366px)': {
		wrapper: {
			maxWidth: '100%',
		},
	},
	'@media (max-width: 960px)': {
		container: {
			boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.2)',
		},
	},
}));

AppStyle.main = createUseStyles((theme) => ({
	container: {
		flex: 1,
		overflowX: 'hidden',
		overflowY: 'auto',
	},
	wrapper: {
		maxWidth: theme.spacement.maxWidth,
		margin: '0 auto',
	},
	'@media (max-width: 1366px)': {
		wrapper: {
			maxWidth: '100%',
		},
	},
}));

AppStyle.button = createUseStyles((theme) => ({
	primary: {
		width: '100%',
		backgroundColor: theme.color.primary,
		color: theme.color.contrast,
		margin: '3px 0',
		padding: '0 20px',
		fontSize: 16,
		fontWeight: 500,
		height: 50,
		'&:hover, &:focus': {
			backgroundColor: theme.color.primaryDark,
		},
	},
	flat: {
		width: '100%',
		color: theme.color.primary,
		margin: '3px 0',
		fontSize: 16,
		fontWeight: 500,
		height: 50,
	},
}));

AppStyle.floatingBox = createUseStyles((theme) => ({
	container: {
		minHeight: 28,
		minWidth: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		'& svg': {
			fill: theme.color.icon,
			color: theme.color.icon,
			width: '100%',
			height: '100%',
		},
	},
	icon: {
		width: 24,
		height: 24,
	},
	label: {
		display: 'none',
		marginLeft: 8,
		'& span': {
			color: theme.color.text,
		},
	},
	'@media (min-width: 1248px)': {
		container: {
			marginLeft: 20,
		},
		label: {
			display: 'flex',
		},
	},
}));

AppStyle.carousel = createUseStyles((theme) => ({
	container: {
		padding: '0 30px',
		margin: '20px 0 64px',
		overflow: 'hidden',
	},
	inner: {
		display: 'grid',
		gridGap: '9px',
		overflow: 'hidden',
	},
	item: {
		display: 'grid',
		justifyContent: 'center',
		padding: '0 2.5px',
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	figure: {
		height: 110,
		width: 110,
		position: 'relative',
		margin: 0,
		overflow: 'hidden',
		borderRadius: 10,
	},
	img: {
		position: 'absolute',
		width: 140,
		height: 110,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	label: {
		marginTop: 20,
		wordBreak: 'break-word',
		textAlign: 'center',
	},
}));

export default AppStyle;
