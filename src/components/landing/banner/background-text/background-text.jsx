import React     from "react";
import PropTypes from "prop-types";
import "./background-text.css";

import { BANNER } from "../../../../static/constants/constants";

const backgroundText = props => {
	return (
		<div className = "banner-bg">

			{/*text top*/ }
			<div className = "banner-bg__text banner-bg__text--top">
				{ BANNER.black }
			</div>

			{/*text bottom*/ }
			<div className = "banner-bg__text banner-bg__text--bot">
				{ BANNER.friday }
			</div>
		</div>
	);
};

backgroundText.propTypes = {};

export default backgroundText;
