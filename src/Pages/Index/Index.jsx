import "./Index.scss";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import ProductCardData from "../../components/ProductCard/productCardData.js";

export default function Index({ children }) {
	return (
		<div>
			<main className="container main">
				<div className="row mt-3 main__title ">
					<span className="h5">دوره های درحال برگزاری :</span>
				</div>
				<div className="main__cards">
					{ProductCardData.map((item) => (
						<ProductCard
							key={item.id}
							id={item.id}
							img={item.img}
							title={item.title}
							certificate={item.certificate}
							teacher={item.teacher}
							address={item.address}
							price={item.price}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
