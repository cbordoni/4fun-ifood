import React from 'react';
import PropTypes from 'prop-types';

import AppStyle from '../jss';

const TextField = (props) => {
	const [state, setState] = React.useState({ bolFocused: false });

	const classes = AppStyle.fieldset();
	const { label, id, value, placeholder, ...rest } = props;

	const onFocus = () => {
		setState((state) => ({ ...state, bolFocused: true }));
	};

	const onBlur = () => {
		setState((state) => ({ ...state, bolFocused: false }));
	};

	const labelClassName = [classes.label];

	if (state.bolFocused || value) labelClassName.push(classes.labelFocusIn);

	return (
		<fieldset className={classes.container}>
			<div className={classes.wrapper}>
				<label className={labelClassName.join(' ')} htmlFor={id}>
					{label}
				</label>

				<input
					tabIndex="0"
					onFocus={onFocus}
					onBlur={onBlur}
					className={classes.input}
					id={id}
					value={value}
					{...rest}
				/>
			</div>
		</fieldset>
	);
};

TextField.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default React.memo(TextField);
