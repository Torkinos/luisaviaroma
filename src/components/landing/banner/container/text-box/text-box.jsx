import React     from "react";
import PropTypes from "prop-types";
import "./text-box.scss";

import { BANNER } from "../../../../../static/constants/constants";

const textBox = props => {

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

textBox.propTypes = {};

export default textBox;
