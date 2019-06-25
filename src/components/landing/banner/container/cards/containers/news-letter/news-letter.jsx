import React, { Component } from "react";
import "./news-letter.scss";

import TextField         from "@material-ui/core/TextField";
import { BANNER }        from "../../../../../../../static/constants/constants";
import BannerCardWrapper from "../../components/card-wrapper/card-wrapper";

class NewsLetter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value:   "",
			valid:   false,
			touched: false,
			check:   false
		};
	}

	render() {

		const {
						title, text, label, tAndC, button
					} = BANNER.newsLetter;

		const { value, valid, touched, check } = this.state;

		const invalid = !valid && touched;

		return (
			<BannerCardWrapper
				title = { title }
				text = { text }
				btnText = { button }
				disabled = { !(check && valid) }

				onClick = { this.send }
			>
				<div className = "bnews-letter">

					{/*input field*/ }
					<div className = "bnews-letter__textfield">
						<TextField
							label = { label }
							value = { value }
							error = { invalid }
							fullWidth

							onChange = { e => this.validate(e.target.value) }
						/>
					</div>

					{/*terms and conditions*/ }
					<div className = "bnews-letter__tandc">

						{/*checkbox*/ }
						<div className = "bnews-letter__checkbox">
							<input
								type = "checkbox"
								name = "CheckboxValue"
								value = { check }

								onChange = { this.checkToggle }
							/>
						</div>

						{/*text*/ }
						<div className = "bnews-letter__tandc--text">
							{ tAndC }
						</div>
					</div>
				</div>
			</BannerCardWrapper>
		);
	}

	// validation function
	validate = value => {
		const re    = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const valid = re.test(String(value).toLowerCase());


		this.setState({ valid, value, touched: true });
	};

	// checkbox toggle
	checkToggle = () => {
		this.setState(prevState => {
			return { check: !prevState.check };
		});
	};

	// send data handler
	send = () => {

		this.setState({
			value:   "",
			valid:   false,
			touched: false,
		});

		alert("success");
	};
}

export default NewsLetter;
