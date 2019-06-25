import React, { useState } from "react";
import ClassNames          from "classnames";
import "./mobile.scss";

import mail             from "../../../../../../../static/icons/ico-mail.svg";
import bell             from "../../../../../../../static/icons/ico-notification.svg";
import BannerNewsLetter from "../news-letter/news-letter";
import BannerPushApp    from "../push-app/push-app";

const data = [
	{ name: "mail", icon: mail },
	{ name: "bell", icon: bell }
];

const Mobile = () => {

	const [toggleNav, setToggle] = useState("mail");

	const toggle = toggleNav => {
		setToggle(toggleNav);
	};

	const tabs = data.map((item, index) => {

		const tabClass = ClassNames({
			"bcard-mobile__tab":         true,
			"bcard-mobile__tab--active": toggleNav === item.name
		});

		return (
			<div
				className = { tabClass }
				key = { index }

				onClick = { () => toggle(item.name) }
			>
				<img
					src = { item.icon }
					alt = { item.name }
				/>
			</div>
		);
	});

	const active = toggleNav === "mail"
								 ? <BannerNewsLetter />
								 : <BannerPushApp />;

	return (
		<div className = "bcard-mobile">

			{/*header*/ }
			<div className = "bcard-mobile__header">
				{ tabs }
			</div>

			{/*body*/ }
			<div className = "bcard-mobile__body">
				{ active }
			</div>

		</div>
	);
};

export default Mobile;
