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
			<CardsSection />
		</div>
	);
};

landing.propTypes = {};

export default landing;
