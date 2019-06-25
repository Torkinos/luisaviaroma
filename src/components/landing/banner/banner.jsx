import React from "react";
import "./banner.scss";

import BannerBgText    from "./background-text/background-text";
import BannerContainer from "./container/container";

const banner = () => {
	return (
		<div className = "banner">

			{/*text on background*/ }
			<BannerBgText />

			{/*information boxes container*/ }
			<BannerContainer />
		</div>
	);
};

export default banner;
