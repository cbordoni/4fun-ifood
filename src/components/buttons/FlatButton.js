import React from 'react';
import AppStyle from '../../jss';

const FlatButton = (props) => {
	const classes = AppStyle.button();

	const { label, ...rest } = props;

	return (
		<button className={classes.flat} {...rest}>
			<span>{label}</span>
		</button>
	);
};

export default FlatButton;
