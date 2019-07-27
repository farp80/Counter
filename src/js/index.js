//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import { counterAlgorithm } from "./helper.js";
//import your own components
import { Clock } from "./component/clock.js";

//render your react application
let count = 0;
setInterval(() => {
	const countArray = counterAlgorithm(count);
	count++;
	ReactDOM.render(
		<Clock clockLength={countArray} />,
		document.querySelector("#app")
	);
}, 1000);
