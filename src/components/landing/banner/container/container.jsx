import React     from "react";
import PropTypes from "prop-types";
import "./container.scss";

import BannerTextBox from "./text-box/text-box";
import BannerCards   from "./cards/cards";

const container = props => {
	return (
		<div className = "banner-container">
			<div className = "banner-container__inner">

				{/*text box*/ }
				<div className = "banner-container__txtbx">
					<BannerTextBox />
				</div>

				{/*cards*/ }
				<div className = "banner-container__cards">
					<BannerCards />
				</div>
			</div>
		</div>
	);
};

container.propTypes = {};

export default container;
