import "./CourseCertificate.scss";

export default function CourseCertificate({ className, title }) {
	return (
		<div className={className}>
			<i className="fa-regular fa-file-certificate"></i>
			<span>{title}</span>
		</div>
	);
}
