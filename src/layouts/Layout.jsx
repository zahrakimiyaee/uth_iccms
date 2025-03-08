import { useState } from "react";
import "../styles/reset_css.css";
import "./Layout.css";
import Navbar from "../components/Navbar/Navbar";
import CoreConcept from "../components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../components/CoreConcept/data";
import CourseGoal from "../components/CourseGoal/CourseGoal";
import TabButton from "../components/TabButton/TabButton";
import { Component } from "react";
import { EXAMPLES } from "../components/TabButton/data.js";

export default function Layout({ children }) {
	const [Counter, setCounter] = useState();
	function clickHandeler(topic) {
		// console.log(Counter);
		setCounter(topic);
		// testContent = title;
		// console.log(testContent);

		// if (title === "Components") {
		// 	console.log("Components");
		// }
		// if (title === "JSX") {
		// 	console.log("JSX");
		// }
		// if (title === "Props") {
		// 	console.log("Props");
		// }
		// if (title === "State") {
		// 	console.log("State");
		// }
	}
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<section>
					<h2>Core Concepts</h2>
					<ul className="ul">
						<CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
						<CoreConcept {...CORE_CONCEPTS[4]} />
					</ul>
					<CourseGoal
						title="learn react"
						description="today we learn react bla bla bla"
					/>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu className="item-nav">
						<TabButton select={() => clickHandeler("Components")}>
							Components
						</TabButton>
						<TabButton select={() => clickHandeler("JSX")}>
							JSX
						</TabButton>
						<TabButton select={() => clickHandeler("Props")}>
							Props
						</TabButton>
						<TabButton select={() => clickHandeler("State")}>
							State
						</TabButton>
					</menu>
					{!Counter ? (
						<p>Please select a topic.</p>
					) : (
						<div className="tab-content">
							<h3>{EXAMPLES[Counter].title}</h3>
							<p>{EXAMPLES[Counter].description}</p>
							<pre>
								<code>{EXAMPLES[Counter].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
			<footer></footer>
		</>
	);
}
