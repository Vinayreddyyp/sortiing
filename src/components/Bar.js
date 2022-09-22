import "./Bar.css";

import React from "react";

const Bar = (props) => {
	const { length, colorKey, key } = props;
	const colors = ["red", "green", "blue"];
	const barStyle = {
		height: length,
	};

	return (
		<React.Fragment>
			<div className="bar" style={barStyle}></div>
		</React.Fragment>
	);
};
export default Bar;
