import React, { useRef } from "react";

export const UseRefComponent = (): JSX.Element => {
	const textInput = useRef<HTMLInputElement>(null);

	return (
		<>
			<input type="text" ref={textInput} />
			<button onClick={() => textInput.current.focus()}>
				Focus the text input
			</button>
		</>
	);
};
