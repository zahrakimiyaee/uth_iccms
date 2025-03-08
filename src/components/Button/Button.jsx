import "./Button.css";
import { useState } from "react";

export default function Button({
	type = "button",
	text = "Exam",
	customClasses = "",
	children,
	clickShodan = () => {},
}) {
	// const [counter, setCount] = useState(0);

	return (
		<button
			className={`btn ${customClasses}`}
			type={`button ${type}`}
			onClick={clickShodan}
		>
			{text}
		</button>
	);
}

function Span() {
	return <span>This is my span</span>;
}

export { Span };
