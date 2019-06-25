import React from "react";
import "./background-text.css";

import { BANNER } from "../../../../static/constants/constants";

const backgroundText = () => {
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

export default backgroundText;
