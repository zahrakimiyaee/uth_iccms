import "./WithCertificate.scss";

export default function WithCertificate() {
	return (
		<>
			<span className="certificate__title">
				فایل سرفصل‌های فنی‌حرفه‌ای را اینجا آپلود کنید.
			</span>
			<input
				type="file"
				name="file"
				id="file"
				className="certificate__file"
			></input>
		</>
	);
}
