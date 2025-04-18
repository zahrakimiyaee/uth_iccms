import { useNavigate } from "react-router-dom";
import "./ErrorHandler.scss";

export default function ErrorHandler() {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};
	return (
		<div className="not-found">
			<div className="not-found--title">
				<i className="fa-regular fa-do-not-enter"></i>
				<span>صفحه مورد نظر یافت نشد...</span>
			</div>
			<button className="not-found--button" onClick={handleBack}>
				بازگشت
			</button>
		</div>
	);
}
