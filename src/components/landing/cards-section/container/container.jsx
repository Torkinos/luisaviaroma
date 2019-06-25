import React, { Component } from "react";
import PropTypes            from "prop-types";
import Fuse                 from "fuse.js";
import "./container.scss";

import { CARDS }   from "../../../../static/constants/constants";
import CardsSearch from "./search/search";
import CardItem    from "./card/card";

class Container extends Component {

	constructor(props) {
		super(props);
		this.options = {
			threshold: 0.2,
			keys:      ["title"]
		};
		this.fuse    = new Fuse([], this.options);
		this.state   = {
			value:    "",
			filtered: null
		};
	}

	render() {

		let cards = null;

		const { value, filtered } = this.state;

		const { data, title } = this.props;

		const { noResults } = CARDS;

		// returns data depending on if search value is entered or not
		const cardList = value.length
										 ? filtered
										 : data;

		// returns amount to be sliced depending on window size
		const amount = window.innerWidth < 1024
									 ? 3
									 : 12;

		if (cardList && cardList.length) {
			cards = cardList.slice(0, amount)
											.map((item, index) => {
												return <CardItem
													key = { index }
													background = { item.url }
													title = { item.title }
												/>;
											});
		} else {
			cards = (
				<div className = "cards-container__no-result">
					{ noResults }
				</div>
			);
		}

		return (
			<div className = "cards-container">

				{/*header*/ }
				<CardsSearch
					title = { title }
					value = { value }

					onChange = { val => this.search(val) }
				/>

				{/*body*/ }
				<div className = "cards-container__body">

					{ cards }
				</div>
			</div>
		);
	}

	search = value => {

		if (!this.fuse.list.length) {
			this.fuse.list = this.props.data;
		}

		this.setState({
			filtered: this.fuse.search(value),
			value
		});
	};
}

Container.propTypes = {
	title: PropTypes.string,
	data:  PropTypes.array
};

export default Container;
