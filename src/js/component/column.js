import React from "react";
import PropType from "prop-types";

export const Column = props => {
	return (
		<div className="col">
			<div className="divBorder">{props.currentValue}</div>
		</div>
	);
};

Column.propTypes = {
	currentValue: PropType.number
};
