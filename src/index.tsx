import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateComponent } from "./useStateComponent";
import { UseRefComponent } from "./useRefComponent";

const init = (): void => {
	ReactDOM.render(<UseRefComponent />, document.getElementById("app"));
};

window.addEventListener("DOMContentLoaded", init);
