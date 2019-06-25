import React             from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./components/landing/landing";

function App() {
	return (
		<div className = "App">
			<Switch>
				<Route
					path = "/"
					component = { Landing }
				/>
			</Switch>
		</div>
	);
}

export default App;
