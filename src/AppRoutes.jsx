import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/reset_css.css";
import "./assets/fonts/fontawesome/css/all.css";
import "jalaali-react-date-picker/lib/styles/index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import NoLayout from "./layouts/NoLayout.jsx";
// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import Index from "./Pages/Index/Index.jsx";
import Login from "./Pages/Login/Login.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import ContactUs from "./Pages/contactUs/contactUs.jsx";
import Course from "./Pages/Course/Course.jsx";
import Product from "./Pages/Product/Product.jsx";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler.jsx";
const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Index />} />
					<Route path="/AboutUs" element={<AboutUs />} />
					<Route path="/ContactUs" element={<ContactUs />} />
					<Route path="/Course" element={<Course />} />
					<Route path="/Product/:id" element={<Product />} />
				</Route>
				<Route element={<NoLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<ErrorHandler />} />
				</Route>
			</Routes>
		</>
	);
};

export default AppRoutes;
