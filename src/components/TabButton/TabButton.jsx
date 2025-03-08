import "./TabButton.css";

export default function TabButton({ children, select }) {
	return (
		<li>
			<button onClick={select}>{children}</button>
		</li>
	);
}
