import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Clock } from "./clock.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Clock />
			</div>
		);
	}
}
