import "./MobileMenu.scss";

export default function MobileMenu({ MenuCloser }) {
	return (
		<div className="mobile-menu__parent">
			<div className="mobile-menu__backdrop"></div>
			<div className="mobile-menu__content">
				<div class="mobile-menu__title" onClick={MenuCloser}>
					<i class="fa-regular fa-arrow-right"></i>
					<strong>مرکز نوآفرینی و کارآفرینی </strong>
				</div>
				<nav aria-label="mobile-menu" className="mobile-menu__navbar">
					<ul>
						<li>
							<a href="/">صفحه اصلی</a>
						</li>
						<li>
							<a href="#">اطلاعیه‌ها</a>
						</li>
						<li>
							<a
								href="https://www.torbath.ac.ir/"
								target="_blank"
							>
								دانشگاه تربت‌حیدریه
							</a>
						</li>
						<li>
							<a href="/Course">درخواست دوره</a>
						</li>
						<li>
							<a href="/AboutUs">درباره ما</a>
						</li>
						<li>
							<a href="/ContactUs">تماس باما</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
