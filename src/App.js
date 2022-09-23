import "./App.css";

import React, { useEffect, useState } from "react";

import Bar from "./components/Bar";
import BubbleSort from "./algorithms/BubbleSort";

const App = () => {
	const [arr, setArr] = useState([]);
	const [steps, setSteps] = useState([]);
	const [colorKey, setColorKey] = useState([]);
	const [color, setColor] = useState([]);
	const [timeouts, setTimeouts] = useState([]);
	const [currentSteps, setCurrentSteps] = useState(0);
	const [count, setCount] = useState(5);
	const [delay, setDelay] = useState(300);
	const [algoritham, setAlgoritham] = useState("");
	const [run, setRun] = useState(false);

	useEffect(() => {
		generateElements();
		if (run) {
			generateSteps();
		}
	}, [run]);

	const handleStart = () => {
		clearTimeOuts();
		const timeOut = [];

		let i = 0;
		let currentStep = currentSteps;
		console.log("current step outside", currentStep);
		while (i < steps.length - currentStep) {
			console.log("steps.length", steps.length, currentStep);
			(function (currentStep, i) {
				setTimeout(() => {
					console.log("currentSteps inside", currentStep);
					setArr(steps[currentStep]);
					console.log("steps[currentStep]", steps[currentStep]);
					setColorKey(color[currentStep]);
					console.log("color[currentStep]", color[currentStep]);
					setCurrentSteps(currentStep + 1);
					console.log("color[currentStep]", currentStep + 1);
				}, delay * i);
			})(currentStep++, i++);

			console.log("i", i);
		}
	};

	const generateSteps = () => {
		let arrays = arr.slice();
		let step = steps.slice();
		let colors = color.slice();
		console.log("colors in the generate steps", colors);
		BubbleSort(arrays, 0, step, colors);
		console.log("steps in the after bubble", step);
		setSteps(step);
		setColor(colors);
	};

	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const clearTimeOuts = () => {
		timeouts.forEach((timeout) => clearTimeout(timeout));
		setTimeouts([]);
	};

	const clearColorKeys = () => {
		let blank = new Array(count).fill(0);
		setColorKey(blank);
		setColor([blank]);
	};

	const generateElements = () => {
		clearTimeOuts();
		clearColorKeys();
		const arr = [];
		for (let i = 0; i < count; i++) {
			arr.push(generateRandomNumber(50, 200));
		}
		setArr(arr);
		setSteps([arr]);
		setCount(count);
		setCurrentSteps(0);
		console.log("currentStep in generateElements", currentSteps);
		setRun(true);
	};

	let bars = arr.map((val, id) => {
		return <Bar key={id} length={val} colorKey={colorKey[id]} />;
	});
	console.log("bars", bars);
	return (
		<div className="App">
			{bars}
			<button onClick={handleStart}>Start</button>
		</div>
	);
};

export default App;
