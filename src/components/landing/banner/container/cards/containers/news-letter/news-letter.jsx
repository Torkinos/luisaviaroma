import React     from "react";
import PropTypes from "prop-types";
import "./news-letter.scss";

import TextField         from "@material-ui/core/TextField";
import { BANNER }        from "../../../../../../../static/constants/constants";
import BannerCardWrapper from "../../components/card-wrapper/card-wrapper";

const newsLetter = props => {

	const { title, text, label, tAndC, button } = BANNER.newsLetter;

	return (
		<BannerCardWrapper
			title = { title }
			text = { text }
			btnText = { button }
		>
			<div className = "bnews-letter">

				{/*input field*/ }
				<div className = "bnews-letter__textfield">
					<TextField
						label = { label }
						fullWidth
					/>
				</div>

				{/*terms and conditions*/ }
				<div className = "bnews-letter__tandc">

					{/*checkbox*/ }
					<div className = "bnews-letter__checkbox">
						<input type = "checkbox" />
					</div>

					{/*text*/ }
					<div className = "bnews-letter__tandc--text">
						{ tAndC }
					</div>
				</div>
			</div>
		</BannerCardWrapper>
	);
};

newsLetter.propTypes = {};

export default newsLetter;
