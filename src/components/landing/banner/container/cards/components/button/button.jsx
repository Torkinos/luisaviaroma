import React      from "react";
import PropTypes  from "prop-types";
import ClassNames from "classnames";
import "./button.scss";

const button = props => {

	const buttonClass = ClassNames({
		"ban-button":           true,
		"ban-button--disabled": props.disabled
	});

	return (
		<button
			className = { buttonClass }
			onClick = { props.onClick }
		>
			{ props.children }
		</button>
	);
};

button.propTypes = {
	disabled: PropTypes.bool,
	onClick:  PropTypes.func
};

export default button;
