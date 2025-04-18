import { useState } from "react";
import { InputDatePicker } from "jalaali-react-date-picker";
import "./Master.scss";
import WithCertificate from "./WithCertificate/WithCertificate";
import WithoutCertificate from "./WithoutCertificate/WithoutCertificate";

export default function Master() {
	const [show, setShow] = useState(true);
	return (
		<div className="master-inputs">
			<div className="master-inputs__name">
				<label htmlFor="course-name">عنوان دوره :</label>
				<input
					type="text"
					id="course-name"
					placeholder="دوره برنامه‌نویسی تحت‌وب"
					required
				/>
			</div>
			<div className="master-inputs__date">
				<label htmlFor="course-date">تاریخ شروع :</label>
				{/* <input type="date" id="course-date" required /> */}
				<InputDatePicker className="master-inputs__date__date-picker" />
			</div>
			<div className="master-inputs__teacher">
				<label htmlFor="course-teacher">مدرس :</label>
				<input
					type="text"
					id="course-teacher"
					placeholder="زهرا کیمیایی"
					required
				/>
			</div>
			<div className="master-inputs__time">
				<label htmlFor="course-time">روز برگزاری:</label>
				<div className="master-inputs__time__values">
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
			<div className="master-inputs__more-descrption">
				<label htmlFor="more-description">توضیحات بیشتر :</label>
				<textarea
					name="more-description"
					id=""
					placeholder="..."
				></textarea>
			</div>
			<div className="master-inputs__certificate">
				<div className="master-inputs__certificate--order">
					<input
						type="radio"
						name="certif"
						id="with-certif"
						onChange={() => setShow(true)}
						checked={show === true}
					/>
					<label htmlFor="with-certif">دارای مدرک فنی‌حرفه‌ای</label>
				</div>
				<div className="master-inputs__certificate--order">
					<input
						type="radio"
						name="certif"
						id="without-certif"
						onChange={() => setShow(false)}
					/>
					<label htmlFor="without-certif">
						فاقد مدرک فنی‌حرفه‌ای
					</label>
				</div>
				<div className="master-inputs__certificate__certificate">
					{show === true && <WithCertificate />}
					{show === false && <WithoutCertificate />}
				</div>
			</div>
		</div>
	);
}
