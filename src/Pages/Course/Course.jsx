import { useState } from "react";
import "./Course.scss";
import Master from "./Master/Master";
import Student from "./Student/Student";

export default function Course() {
	const [show, setShow] = useState(true);
	return (
		<section className="main-container">
			<div className="selector">
				<div
					className={
						show === true
							? "selector__master--selected"
							: "selector__master--deselected"
					}
					onClick={() => setShow(true)}
				>
					<span>استاد</span>
				</div>
				<div
					className={
						show === false
							? "selector__student--selected"
							: "selector__student--deselected"
					}
					onClick={() => setShow(false)}
				>
					<span>دانشجو</span>
				</div>
			</div>
			<div className="content">
				{show === true && <Master />}
				{show === false && <Student />}

				<button className="register">ثبت درخواست</button>
			</div>
		</section>
	);
}
