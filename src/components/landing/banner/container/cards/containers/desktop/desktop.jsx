import React from "react";
import "./desktop.scss";

import BannerNewsLetter from "../news-letter/news-letter";
import BannerPushApp    from "../push-app/push-app";

const desktop = () => {
	return (
		<div className = "bcard-desk">

			{/*slot one*/ }
			<div className = "bcard-desk__slot bcard-desk__slot--one">
				<BannerNewsLetter />
			</div>

			{/*slot two*/ }
			<div className = "bcard-desk__slot bcard-desk__slot--two">
				<BannerPushApp />
			</div>
		</div>
	);
};

export default desktop;
