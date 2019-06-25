import React from "react";
import "./cards.scss";

import BannerCardsMobile  from "./containers/mobile/mobile";
import BannerCardsDesktop from "./containers/desktop/desktop";

const cards = () => {
	return (
		<div className = "banner-cards">

			{/*visible on mobile and tablet (until 1280px width)*/ }
			<div className = "banner-cards__container banner-cards__container--mobile">
				<BannerCardsMobile />
			</div>

			{/*visible on desktop (1280px width)*/ }
			<div className = "banner-cards__container banner-cards__container--desktop">
				<BannerCardsDesktop />
			</div>
		</div>
	);
};

export default cards;
