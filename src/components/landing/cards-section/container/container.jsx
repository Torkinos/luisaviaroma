import React     from "react";
import PropTypes from "prop-types";
import "./container.scss";

import CardsSearch from "./search/search";
import CardItem    from "./card/card";

const container = props => {
	return (
		<div className = "cards-container">

			{/*header*/ }
			<CardsSearch />

			{/*body*/ }
			<div className = "cards-container__body">

				{/*card*/ }
				<CardItem />
			</div>
		</div>
	);
};

container.propTypes = {};

export default container;
