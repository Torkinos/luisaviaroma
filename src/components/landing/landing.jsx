import React     from "react";
import PropTypes from "prop-types";
import "./landing.scss";

import Banner       from "./banner/banner";
import CardsSection from "./cards-section/cards-section";

const landing = props => {
	return (
		<div className = "landing">

			{/*banner*/ }
			<Banner />

			{/*list of items*/ }
			<div className = "landing__cards">
				<CardsSection />
			</div>
		</div>
	);
};

landing.propTypes = {};

export default landing;
