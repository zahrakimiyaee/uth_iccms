import { useState } from "react";
// import { DatePicker } from "jalaali-react-date-picker";
import "./Student.scss";

export default function Student() {
	const [show, setShow] = useState(false);
	return (
		<div className="student-inputs">
			<div className="student-inputs__name">
				<label htmlFor="course-name">عنوان دوره :</label>
				<input
					type="text"
					id="course-name"
					placeholder="دوره برنامه‌نویسی تحت‌وب"
					required
				/>
			</div>
			<div className="student-inputs__teacher">
				<label htmlFor="course-teacher">مدرس :</label>
				<input
					type="text"
					id="course-teacher"
					placeholder="زهرا کیمیایی"
					required
				/>
			</div>
			<div className="student-inputs__time">
				<label htmlFor="course-time">زمان برگزاری:</label>
				<div className="student-inputs__time__values">
					<select name="day" id="">
						<option value="">شنبه</option>
						<option value="">یکشنبه</option>
						<option value="">دوشنبه</option>
						<option value="">سه‌‌شنبه</option>
						<option value="">چهارشنبه</option>
						<option value="">پنجشنبه</option>
					</select>
					<select name="hour" id="">
						<option value="">8-10</option>
						<option value="">10-12</option>
						<option value="">12-14</option>
						<option value="">14-16</option>
						<option value="">16-18</option>
						<option value="">18-20</option>
					</select>
				</div>
			</div>
			<div className="student-inputs__more-description">
				<input
					type="checkbox"
					onChange={() =>
						show === true ? setShow(false) : setShow(true)
					}
				/>
				<label htmlFor="more-description">توضیحات بیشتر</label>
			</div>
			{show === true && (
				<textarea
					className="student-inputs__textarea"
					name="more-description"
					id="more-description"
					placeholder="..."
				></textarea>
			)}

			<div className="student-inputs__checkbox">
				<input type="checkbox" />
				<label htmlFor="">دوره دارای تاییده فنی‌حرفه‌ای باشد.</label>
			</div>
		</div>
	);
}
