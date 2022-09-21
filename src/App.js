import "./App.css";

import React, { useState } from "react";

const App = () => {
	const [array, setAttay] = useState([]);
	const [arraySteps, setArraySteps] = useState([]);
	const [colorKey, setColorKey] = useState([]);
	const [colorSteps, setColorSteps] = useState([]);
	const [currentSteps, setCurrentSteps] = useState(0);
	const [count, setCount] = useState(0);
	const [delay, setDelay] = useState(100);

	return (
		<div className="App">
			<h2>hellow world</h2>
		</div>
	);
};

export default App;
