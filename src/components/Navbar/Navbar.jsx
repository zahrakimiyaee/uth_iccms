import Button from "../Button/Button";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
	const [counter, setCount] = useState(0);
	return (
		<nav className="navbar">
			<ul>
				<li>خانه</li>
				<li>محصولات</li>
				<li>بلاگ</li>
				<li>درباره ما</li>
				<li>تماس با ما</li>
			</ul>
			<Button
				type="index"
				text={counter}
				customClasses="btn-danger"
				clickShodan={() => {
					setCount(counter + 1);
				}}
			></Button>
		</nav>
	);
}
