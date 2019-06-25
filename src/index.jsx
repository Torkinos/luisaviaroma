import React                                from "react";
import ReactDOM                             from "react-dom";
import App                                  from "./App";
import * as serviceWorker                   from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider }                         from "react-redux";
import store                                from "./store/store";
import { BrowserRouter as Router }          from "react-router-dom";
import "./index.scss";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#ffffff",
			main:  "#000000",
		},
	}
});

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			<MuiThemeProvider theme = { theme }>
				<App />
			</MuiThemeProvider>
		</Router>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
