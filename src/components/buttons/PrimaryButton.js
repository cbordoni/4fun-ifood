import React from 'react';
import AppStyle from '../../jss';

const PrimaryButton = (props) => {
	const classes = AppStyle.button();

	const { label, ...rest } = props;

	return (
		<button className={classes.primary} {...rest}>
			<span>{label}</span>
		</button>
	);
};

export default PrimaryButton;
