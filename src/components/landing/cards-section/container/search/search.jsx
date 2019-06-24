import React     from "react";
import PropTypes from "prop-types";
import "./search.scss";

import { CARDS } from "../../../../../static/constants/constants";
import TextField from "@material-ui/core/TextField";

const search = props => {

	const { search } = CARDS;

	return (
		<div className = "cards-search">

			{/*title*/ }
			<div className = "cards-search__title">
				{ props.title }
			</div>

			{/*input*/ }
			<div className = "cards-search__input">
				<TextField
					placeholder = { search }
					value = { props.value }
					fullWidth

					onChange = { e => props.onChange(e.target.value) }
				/>
			</div>
		</div>
	);
};

search.propTypes = {
	title:    PropTypes.string,
	value:    PropTypes.string,
	onChange: PropTypes.func
};

export default search;
