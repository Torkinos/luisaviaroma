import React, { Component } from "react";
import "./push-app.scss";

import { BANNER }        from "../../../../../../../static/constants/constants";
import BannerCardWrapper from "../../components/card-wrapper/card-wrapper";
import qrImage           from "../../../../../../../static/images/qr-code-lvr-ios-app-1024x1024.png";
import appStoreImage     from "../../../../../../../static/images/CTA-App-Store.png";

class PushApp extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		const {
						pushTitle, pushText, pushButton
					} = BANNER.push;
		const {
						downloadTitle, downloadText, qrAlt, appStoreLink, appStoreAlt
					} = BANNER.download;

		let content = null;

		if ("Notification" in window) {
			content = (
				<BannerCardWrapper
					title = { pushTitle }
					text = { pushText }
					btnText = { pushButton }

					onClick = { this.enableNotifications }
				/>
			);
		} else {

			const appStore = (
				<a
					className = "push-app__footer-link"
					href = { appStoreLink }
				>
					<img
						className = "push-app__footer"
						src = { appStoreImage }
						alt = { appStoreAlt }
					/>
				</a>
			);

			content = (
				<BannerCardWrapper
					title = { downloadTitle }
					text = { downloadText }
					footer = { appStore }
				>

					{/*qr image*/ }
					<div className = "push-app__qr">
						<img
							src = { qrImage }
							alt = { qrAlt }
						/>
					</div>
				</BannerCardWrapper>
			);
		}

		return (
			<div className = "push-app">
				{ content }
			</div>
		);
	}

	enableNotifications = () => {
		Notification.requestPermission()
								.then(() => console.log("enabled!"));
	};
}

export default PushApp;
