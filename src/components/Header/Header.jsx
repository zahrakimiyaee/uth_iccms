import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo_white.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import Button from "../../components/Button/Button";

export default function Header() {
	const [show, setshow] = useState(false);
	const MenuClicker = () => {
		setshow(true);
	};
	return (
		<header className="container-fluid position-sticky z-1 top-0 header">
			<i
				className="fa-regular fa-bars mobile-menu-icon d-none"
				onClick={MenuClicker}
			></i>
			<img className="logo col-2" src={logo} alt="" />
			<strong>
				سامانه مدیریت دوره‌های آموزشی <br /> مرکز نوآفرینی و کارآفرینی
				دانشگاه تربت‌حیدریه
			</strong>
			<nav aria-label="desktop-menu" className="navbar d-flex">
				<ul>
					<li>
						<a href="/">صفحه اصلی</a>
					</li>
					<li>
						<a href="#">اطلاعیه‌ها</a>
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
			{show && <MobileMenu MenuCloser={() => setshow(false)} />}
			<Button className="register">ثبت‌نام / ورود</Button>
		</header>
	);
}
