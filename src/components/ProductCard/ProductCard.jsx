import "./ProductCard.scss";
import CourseCertificate from "../CourseCertificate/CourseCertificate";
// import { useState } from "react";

export default function ProductCart({
	id,
	img,
	title,
	certificate,
	teacher,
	address,
	price,
}) {
	// console.log(id);
	return (
		<div className="card p-2 m-2 product">
			<img
				src={img}
				alt=""
				className="rounded card-img-top product__img"
			/>
			<figcaption className="description">
				<strong className="description__title">{title}</strong>
				{certificate ? (
					<CourseCertificate
						className={"description__certificate--have"}
						title={"دارای گواهی فنی حرفه‌ای"}
					/>
				) : (
					<CourseCertificate
						className={"description__certificate--havenot"}
						title={"فاقد گواهی فنی حرفه‌ای"}
					/>
				)}
				{/* -------------------teacher---------------- */}
				<section className="description__teacher">
					<h6 className="description__teacher__title">مدرس : </h6>
					<span className="description__teacher__content">
						{teacher}
					</span>
				</section>
				{/* ------------------address----------------- */}
				{/* <section className="description__address">
					<div>
						<h6 className="description__address__title">
							محل برگزاری :
						</h6>
						<span className="card-text description__address__content">
							{address}
						</span>
					</div>
				</section> */}
				{/* ------------------buttons------------------ */}
				<a
					href={`/Product/${id}`}
					className="btn my-1 description__more"
				>
					توضیحات بیشتر
				</a>
				<section className="description__price">
					<span className=" description__price__discount">
						<s>200,000</s>
						<small>تومان</small>
					</span>
					<span className="description__price__price">
						<strong>{price}</strong>
						<small>تومان</small>
					</span>
				</section>
				<a
					href=""
					className="btn my-1 btn-custom description__register"
				>
					ثبت‌نام
				</a>
			</figcaption>
		</div>
	);
}
