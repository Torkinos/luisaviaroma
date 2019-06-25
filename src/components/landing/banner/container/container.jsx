import React from "react";
import "./container.scss";

import BannerTextBox from "./text-box/text-box";
import BannerCards   from "./cards/cards";

const container = () => {
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

export default container;
