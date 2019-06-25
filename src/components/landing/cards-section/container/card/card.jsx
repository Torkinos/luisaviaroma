import React     from "react";
import PropTypes from "prop-types";
import "./card.scss";

const card = props => {
	return (
		<div
			className = "card-item"
			style = { { backgroundImage: `url(${ props.background })` } }
		>

			{/*title*/ }
			<div className = "card-item__title">
				{ props.title }
			</div>
		</div>
	);
};

card.propTypes = {
	background: PropTypes.string,
	title:      PropTypes.string,
};

export default card;
