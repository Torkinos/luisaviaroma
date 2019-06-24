import React                                from "react";
import ReactDOM                             from "react-dom";
import "./index.scss";
import App                                  from "./App";
import * as serviceWorker                   from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider }                         from "react-redux";
import store                                from "./store/store";

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
		<MuiThemeProvider theme = { theme }>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
