import React     from "react";
import PropTypes from "prop-types";
import "./button.scss";

const button = props => {
	return (
		<button className = "ban-button">
			{ props.children }
		</button>
	);
};

button.propTypes = {};

export default button;
