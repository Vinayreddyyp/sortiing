import "./Bar.css";

import { useEffect, useState } from "react";

import React from "react";

const Bar = (props) => {
	const { length, colorKey, key } = props;

	const [len, setLen] = useState(length);

	const colors = ["#3d5af1", "#ff304f", "#83e85a"];

	useEffect(() => {
		setLen(length);
	}, [length]);
	const barStyle = {
		background: colors[colorKey],
		height: length,
	};

	return (
		<React.Fragment>
			<div className="bar" style={barStyle}></div>
		</React.Fragment>
	);
};
export default Bar;
