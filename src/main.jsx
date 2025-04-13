import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/App.css";
// import Layout from "./layouts/Layout";
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>
);

// createRoot(document.getElementById("root")).render(
// 	<BrowserRouter>
// 		{/* <Layout><App /></Layout> */}
// 		<AppRoutes />
// 	</BrowserRouter>
// );
