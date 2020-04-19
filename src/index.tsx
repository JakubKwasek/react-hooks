import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateComponent } from "./useStateComponent";

const init = (): void => {
	ReactDOM.render(<UseStateComponent />, document.getElementById("app"));
};

window.addEventListener("DOMContentLoaded", init);
