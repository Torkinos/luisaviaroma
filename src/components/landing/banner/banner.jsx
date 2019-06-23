import React     from "react";
import PropTypes from "prop-types";
import "./banner.scss";

import BannerBgText    from "./background-text/background-text";
import BannerContainer from "./container/container";

const banner = props => {
	return (
		<div className = "banner">

			{/*text on background*/ }
			<BannerBgText />

			{/*information boxes container*/ }
			<BannerContainer />
		</div>
	);
};

banner.propTypes = {};

export default banner;
