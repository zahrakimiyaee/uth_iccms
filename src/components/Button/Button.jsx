import "./Button.scss";

export default function Button({ children }) {
	return (
		<a className="btn button" href="/login">
			<i className="fa-light fa-user mx-1"></i>
			<span href="/login">{children}</span>
		</a>
	);
}
