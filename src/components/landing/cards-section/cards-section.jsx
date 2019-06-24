import React, { Component } from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import * as action          from "../actions";
import { getData }          from "../selectors";
import "./cards-section.scss";

import { CARDS }      from "../../../static/constants/constants";
import CardsContainer from "./container/container";

class CardsSection extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const { men, women } = CARDS;

		const { data } = this.props;

		console.log("data : ", data);

		return (
			<div className = "cards-section">

				{/*container top*/ }
				<CardsContainer
					title = { women }
					data = { data }
				/>

				{/*container bottom*/ }
				<CardsContainer
					title = { men }
					data = { data }
				/>
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
		data: getData(state),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(action.fetchData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsSection);
