import React     from "react";
import PropTypes from "prop-types";
import "./search.scss";

const search = props => {
	return (
		<div className = "cards-search">

			{/*title*/ }
			<div className = "cards-search__title">
				{ props.title }
			</div>

			{/*input*/ }
			<div className = "cards-search__input">

			</div>
		</div>
	);
};

search.propTypes = {
	title: PropTypes.string
};

export default search;
