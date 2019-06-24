import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../actions";
import "./cards-section.scss";

import CardsContainer from "./container/container";

class CardsSection extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const { data } = this.props;

		console.log("data : ", data);

		return (
			<div className = "cards-section">

				{/*container top*/ }
				<CardsContainer />

				{/*container bottom*/ }
				<CardsContainer />
			</div>
		);
	}

	componentDidMount() {
		this.props.fetchData();
	}
}

CardsSection.propTypes = {
	data:      PropTypes.any,
	fetchData: PropTypes.func
};

const mapStateToProps = state => {
	return {
		data: state.landing.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(action.fetchData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsSection);
