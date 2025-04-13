import { useState, useEffect, useRef } from "react";
import "./Login.scss";
import Logo from "../../assets/images/uni-logo.png";

export default function Auth() {
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	});
	const handleChange = (event) => {
		let value = event.target.value.replace(/\D/g, "");
		if (value.length > 9) value = value.slice(0, 10);

		if (value.length > 3) value = value.slice(0, 3) + " " + value.slice(3);
		if (value.length > 7) value = value.slice(0, 7) + " " + value.slice(7);

		setInputValue(value);
	};

	return (
		<div className="form">
			<div className="form__content">
				<a href="/">
					<img src={Logo} alt="" className="form__content__logo" />
				</a>
				<h1 className="form__content__title">ثبت نام / ورود</h1>
				<span className="form__content__description">
					کاربر گرامی <br /> لطفا شماره تلفن خود را وارد کنید.
				</span>
				<div className="form__content__input">
					<span>+98</span>
					<input
						ref={inputRef}
						value={inputValue}
						onChange={handleChange}
						type="tel"
						placeholder="933 333 3333"
						required
						// maxlength="11"
						// autofocus
					/>
				</div>
				<a className="form__content__button">ثبت نام/ ورود</a>
				<p className="form__content__policy">
					ثبت نام شما به معنای پذیرش شرایط و قوانین حریم خصوصی وبسایت
					است.
				</p>
			</div>
		</div>
	);
}
