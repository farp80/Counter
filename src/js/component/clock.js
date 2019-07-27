import React from "react";
import PropType from "prop-types";
import { Column } from "./column.js";
import { ColumnAsIcon } from "./columnAsIcon.js";

export const Clock = props => {
	return (
		<div className="container backgroundForDiv">
			<div className="row">
				<ColumnAsIcon />
				<Column currentValue={props.clockLength[0]} />
				<Column currentValue={props.clockLength[1]} />
				<Column currentValue={props.clockLength[2]} />
				<Column currentValue={props.clockLength[3]} />
				<Column currentValue={props.clockLength[4]} />
				<Column currentValue={props.clockLength[5]} />
			</div>
		</div>
	);
};

Clock.propTypes = {
	clockLength: PropType.array
};
