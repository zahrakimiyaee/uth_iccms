import "./Course.scss";

export default function Course() {
	return (
		<section className="main-container">
			<div className="selector">
				<div className="selector__master">
					<span>استاد</span>
				</div>
				<div className="selector__student">
					<span>دانشجو</span>
				</div>
			</div>
			<div className="content">
				<div className="content__inputs">
					<div className="content__inputs__name">
						<label htmlFor="course-name">عنوان دوره :</label>
						<input
							type="text"
							id="course-name"
							placeholder="دوره برنامه‌نویسی تحت‌وب"
							required
						/>
					</div>
					<div className="content__inputs__date">
						<label htmlFor="course-date">تاریخ شروع :</label>
						<input type="date" id="course-date" required />
					</div>
					<div className="content__inputs__time">
						<label htmlFor="course-time">تاریخ شروع :</label>
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
			</div>
		</section>
	);
}
