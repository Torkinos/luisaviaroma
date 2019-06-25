import React from "react";
import "./text-box.scss";

import { BANNER } from "../../../../../static/constants/constants";

const textBox = () => {

	const { title, text } = BANNER.textBox;

	return (
		<div className = "banner-txtbx">

			{/*title*/ }
			<div className = "banner-txtbx__title">
				{ title }
			</div>

			{/*text*/ }
			<div
				className = "banner-txtbx__text"
				dangerouslySetInnerHTML = { { __html: text } }
			></div>
		</div>
	);
};

export default textBox;
