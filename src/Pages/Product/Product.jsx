import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Product.scss";
import products from "../../components/ProductCard/productCardData.js";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler.jsx";

export default function Product() {
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		let found = products.find((item) => item.id === id);
		if (!found) {
			navigate("/NotFound");
		} else {
			setProduct(found);
		}
	}, [id, navigate]);

	return product ? (
		<section className="container main">
			<div className="product-page">
				<img className="product-page__img" src={product.img} alt="" />
				<div className="product-page__content">
					<ul className="product-page__content__icons">
						<li>
							<a href="#"></a>
							<i className="far fa-share-nodes"></i>
						</li>
						<li>
							<a href="#"></a>
							<i className="far fa-heart"></i>
						</li>
						<li>
							<a href="#"></a>
							<i className="far fa-thumbs-up"></i>
						</li>
					</ul>
					<div className="product-page__content__title">
						<strong>{product.title}</strong>
						<span>گروه کامپیوتر</span>
					</div>
					<div className="product-page__content__date">
						<i className="far fa-calendar-day product-page__content__date--icon"></i>
						<span> تاریخ برگزاری:</span>
						<strong> چهارشنبه‌ها 12-14 از 15آبان تا 23 دی</strong>
					</div>
					<div className="product-page__content__description">
						<div>
							<i className="fa fa-user-tie"></i>
							<span> مدرس:</span>
							<strong>{product.teacher}</strong>
						</div>
						<small>24نفر در این دوره شرکت کرده‌اند.</small>
					</div>
				</div>
				<div className="product-page__price">
					<div className="product-page__price__the-price">
						<span>قیمت:</span>
						<span>
							<strong>{product.price}</strong>
							<small>تومان</small>
						</span>
					</div>

					<button className="product-page__price__submit">
						افزودن به سبدخرید
					</button>
				</div>
			</div>
			<div className="product-disc">
				<div className="product-disc__top-menu">
					<h3>جزئیات دوره</h3>
				</div>
				{/* <hr className="product-disc__seperator" /> */}
				<div className="product-disc__introduction">
					<h1 className="product-disc__introduction__title">
						{product.title}
					</h1>
					<p className="product-disc__introduction__paragraph">
						{product.description}
					</p>
				</div>
				<div className="product-disc__headlines">
					<strong className="d-block">
						آنچه در این دوره می‌آموزید:{" "}
					</strong>
					<div className="product-disc__headlines__list">
						{product.headlines.map((item) => (
							<div key={item.id} className="item">
								<i className="fa-solid fa-badge-check"></i>
								<span>{item.headline}</span>
							</div>
						))}
					</div>
				</div>
				<div className="product-disc__prerequisite">
					<h3 className="product-disc__prerequisite__title">
						پیش‌نیازها:
					</h3>
					<p className="product-disc__prerequisite__paragraph">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
						بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
						برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
						هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
						و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
						برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
						پیشرو در زبان فارسی ایجاد کرد.
					</p>
				</div>
			</div>
		</section>
	) : (
		<ErrorHandler />
	);
}
