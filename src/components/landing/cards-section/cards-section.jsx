import React     from "react";
import PropTypes from "prop-types";
import "./cards-section.scss";

import CardsContainer from "./container/container";

const cardsSection = props => {
	return (
		<div className = "cards-section">

			{/*container top*/ }
			<CardsContainer />

			{/*container bottom*/ }
			<CardsContainer />
		</div>
	);
};

cardsSection.propTypes = {};

export default cardsSection;
