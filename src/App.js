import { useEffect } from "react"
import "aos/dist/aos.css";
import AOS from "aos";
import { Route, Routes } from "react-router-dom"
import Banner from "./Components/Banner/Banner"
import Header from "./Components/Header/Header"
import Service from "./Components/Services/Service";
import Footer from "./Components/Footer/Footer";
import Review from "./Components/Review/Review";
import Login from "./Components/Authentication/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import PurchaseDone from "./Components/PurchaseDone/PurchaseDone";
import RequireAuth from "./Components/Authentication/Login/RequireAuth/RequireAuth";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Four04 from "./Components/404page/Four04";

function App() {

	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={
					<>
						<Banner />
						<Service />
						<Review />
					</>
				} />

				<Route path="/login" element={<Login />} />
				<Route path="/checkout" element={
					<RequireAuth>
						<Checkout />
					</RequireAuth>

				} />
				<Route path="/purchaseDone" element={
					<RequireAuth>
						<PurchaseDone />
					</RequireAuth>
				} />

				<Route path="/blog" element={<Blog />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Four04 />} />

			</Routes>
			<Footer />
		</>

	)
}

export default App
