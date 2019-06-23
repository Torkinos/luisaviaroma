import React                                from "react";
import ReactDOM                             from "react-dom";
import "./index.scss";
import App                                  from "./App";
import * as serviceWorker                   from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#ffffff",
			main:  "#000000",
		},
	}
});

ReactDOM.render(
	<MuiThemeProvider theme = { theme }>
		<App />
	</MuiThemeProvider>,
	document.getElementById("root")
);

serviceWorker.unregister();
