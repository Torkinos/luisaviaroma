import React     from "react";
import PropTypes from "prop-types";
import "./card-wrapper.scss";

import BannerButton from "../button/button";

const cardWrapper = props => {

	const button = (
		<BannerButton
			onClick = { props.onClick }
			disabled = { props.disabled }
		>
			{ props.btnText }
		</BannerButton>
	);

	const footer = props.footer
								 ? props.footer
								 : button;

	return (
		<div className = "bcard-wrapper">

			{/*body*/ }
			<div className = "bcard-wrapper__body">

				{/*title*/ }
				<div className = "bcard-wrapper__title">
					{ props.title }
				</div>

				{/*text*/ }
				<div
					className = "bcard-wrapper__text"
					dangerouslySetInnerHTML = { { __html: props.text } }
				></div>

				{/*content*/ }
				<div className = "bcard-wrapper__content">
					{ props.children }
				</div>
			</div>

			{/*footer*/ }
			<div className = "bcard-wrapper__footer">
				{ footer }
			</div>
		</div>
	);
};

cardWrapper.propTypes = {
	disabled: PropTypes.bool,
	title:    PropTypes.string,
	text:     PropTypes.string,
	btnText:  PropTypes.string,
	footer:   PropTypes.element,
	onClick:  PropTypes.func
};

export default cardWrapper;
