import React     from "react";
import PropTypes from "prop-types";
import "./landing.scss";

import Banner from "./banner/banner";

const landing = props => {
	return (
		<div className = "landing">
			<Banner />
		</div>
	);
};

landing.propTypes = {};

export default landing;
