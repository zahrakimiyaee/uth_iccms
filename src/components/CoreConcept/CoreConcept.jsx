import "../../styles/img.css";

export default function CoreConcept({ title, description, image } = pic1) {
	return (
		<li>
			<img className="img" src={image} alt="..." />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
