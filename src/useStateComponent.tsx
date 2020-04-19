import * as React from "react";
import { useState } from "react";

const updateArray = (arr: number[], elem: number): number[] => {
	return [...arr, elem];
};

const ListComponent = (props: { arr: number[] }): JSX.Element => (
	<ul>
		{props.arr.map(
			(num: number): JSX.Element => (
				<li key={num}>num: {num}</li>
			)
		)}
	</ul>
);

export const UseStateComponent = (): JSX.Element => {
	const [count, setCount] = useState([]);
	console.log(count);
	return (
		<>
			<h1>State is changing</h1>
			<ListComponent arr={count} />
			<button onClick={() => setCount(updateArray(count, count.length))}>
				Click me
			</button>
		</>
	);
};
