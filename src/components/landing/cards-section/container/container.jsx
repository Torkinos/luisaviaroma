import React, { Component } from "react";
import PropTypes            from "prop-types";
import Fuse                 from "fuse.js";
import "./container.scss";

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
		this.state   = {};
	}

	render() {

		let cards = null;

		const { data, title } = this.props;

		if (data) {
			cards = data.map((item, index) => {
				return <CardItem
					key = { index }
					background = { item.url }
					title = { item.title }
				/>;
			});
		}

		return (
			<div className = "cards-container">

				{/*header*/ }
				<CardsSearch
					title = { title }
					onChange = { val => this.search(val) }
				/>

				{/*body*/ }
				<div className = "cards-container__body">

					{ cards }
				</div>
			</div>
		);
	}

	search = val => {

		if (!this.fuse.list.length) {
			this.fuse.list = this.props.data;
		}

		console.log("val : ", this.fuse.search(val));
	};
}

Container.propTypes = {
	title: PropTypes.string,
	data:  PropTypes.array
};

export default Container;
