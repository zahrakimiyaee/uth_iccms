import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import "../../assets/fonts/fontawesome/css/all.css";
import "./styles/reset_css.css";
import "./assets/fonts/fontawesome/css/all.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Index from "./Pages/Index/Index.jsx";
import Login from "./Pages/Login/Login.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import ContactUs from "./Pages/contactUs/contactUs.jsx";
import Course from "./Pages/Course/Course.jsx";

const AppRoutes = () => {
	const location = useLocation();
	const isLoginPage = location.pathname === "/login";
	return (
		<>
			{!isLoginPage && <Header />}
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/login" element={<Login />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/ContactUs" element={<ContactUs />} />
				<Route path="/Course" element={<Course />} />
			</Routes>
			{!isLoginPage && <Footer />}
		</>
	);
};

export default AppRoutes;
