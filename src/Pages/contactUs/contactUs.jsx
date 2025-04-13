import { useState } from "react";
import "./contactUs.scss";

export default function contactUs() {
	const [inputValue, setInputValue] = useState("");
	const handleChange = (event) => {
		let value = event.target.value.replace(/\D/g, "");
		if (value.length > 9) value = value.slice(0, 10);
		if (value.length > 3) value = value.slice(0, 3) + " " + value.slice(3);
		if (value.length > 7) value = value.slice(0, 7) + " " + value.slice(7);

		setInputValue(value);
	};
	return (
		<div className="body">
			<h1 className="body__title">تماس با‌ما</h1>
			<span className="body__description">
				برای ارتباط با ما، فرم زیر را تکمیل نمایید.
			</span>
			<section className="form">
				<div className="form__inputs">
					<div className="form__inputs__name">
						<label htmlFor="name">نام</label>
						<input
							type="text"
							id="name"
							placeholder="زهرا کیمیایی"
							required
						/>
					</div>
					<div className="form__inputs__subject">
						<label htmlFor="subject">موضوع</label>
						<select name="subject" id="subject" required>
							<option value="گزارش رفتار نامناسب مدرس">
								گزارش رفتار نامناسب مدرس
							</option>
							<option value="گزارش خطا در سامانه">
								گزارش خطا در سامانه
							</option>
							<option value="گزارش کنسلی دوره">
								گزارش کنسلی دوره
							</option>
							<option value="انتقاد و پیشنهاد">
								انتقاد و پیشنهاد
							</option>
							<option value="درخواست همکاری">
								درخواست همکاری
							</option>
						</select>
					</div>
					<div className="form__inputs__number">
						<label htmlFor="">شماره تلفن</label>
						<div className="input">
							<span>+98</span>
							<input
								// value={inputValue}
								// onChange={handleChange}
								type="tel"
								placeholder="933 333 3333"
								required
							/>
						</div>
					</div>
					<div className="form__inputs__email">
						<label htmlFor="">ایمیل</label>
						<div className="input">
							<input
								// value={inputValue}
								// onChange={handleChange}
								type="tel"
								placeholder="your email"
								required
							/>
							<span>@gmail.com</span>
						</div>
					</div>
					<div className="form__inputs__message">
						<label>متن پیام</label>
						<textarea placeholder="اینجا بنویسید..."></textarea>
					</div>
					<div className="form__inputs__submit">
						<button>ثبت و ارسال</button>
					</div>
				</div>
				<div className="form__discription">
					<div className="form__discription__number">
						<div className="title">
							<i className="fa-light fa-phone"></i>
							<span>شماره های تماس:</span>
						</div>
						<span>تلفن ثابت: 05152525354</span>
						<span>تلفن همراه: 09333333333</span>
					</div>
					<hr className="form__discription__separator" />
					<div className="form__discription__post-code">
						<div className="title">
							<i className="fa-light fa-envelope"></i>
							<span>کد پستی:</span>
						</div>
						<span>9197964452</span>
					</div>
					<hr className="form__discription__separator"></hr>
					<div className="form__discription__address">
						<div className="title">
							<i className="fa-light fa-location-dot"></i>
							<span>آدرس:</span>
						</div>
						<span>
							تربت حیدریه - کیلومتر ۷ جاده ی تربت حیدریه، مشهد
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}
