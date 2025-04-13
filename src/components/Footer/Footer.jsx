import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="top-footer">
				<div className="top-footer__recent-courses">
					<label>دوره‌های اخیر</label>
					<nav className="top-footer__recent-corses__navbar">
						<ul>
							<li>
								<a href="#">برنامه‌نویسی تحت‌وب</a>
							</li>
							<li>
								<a href="#">آموزش حسابداری</a>
							</li>
							<li>
								<a href="#">آموزش اقتصادسنجی کاربردی</a>
							</li>
							<li>
								<a href="#">سفر به دنیای تجارت</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="top-footer__quick-access col col-6 col-sm-6 col-lg-4">
					<label>دسترسی سریع</label>
					<nav className="top-footer__quick-access__navbar">
						<ul>
							<li>
								<a href="./index.html">صفحه اصلی</a>
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
								<a href="./about_us.html">درباره ما</a>
							</li>
							<li>
								<a href="./contact_us.html">تماس باما</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="top-footer__about col col-12 col-sm-12 col-lg-4">
					<label>دانشگاه تربت‌حیدریه</label>
					<p>
						در سال 1385 تاسیس شده است. در حال حاضر 1999 دانشجو و 38
						استاد در این مرکز مشغول فعالیت می باشند.بر اساس تحلیلهای
						انجام شده این مرکز تاکنون 1062 مقاله علمی در نشریات و
						همایشهای داخلی منتشر نموده است.دانشگاه تربت حیدریه صاحب
						امتیاز و ناشر 2 مجله تخصصی است و تا کنون 27 همایش توسط
						دانشگاه تربت حیدریه برگزار شده است.علاوه بر این تاکنون
						74 مقاله معتبر بین المللی نیز از این مرکز استخراج شده
						است.
					</p>
				</div>
			</div>
			<div className="bottom-footer">
				<hr />
				<div className="bottom-footer__copyright">
					<p>
						کلیه حقوق این وب‌سایت متعلق به دانشگاه تربت‌حیدریه
						میباشد.
					</p>
				</div>
			</div>
		</footer>
	);
}
