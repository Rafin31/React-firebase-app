import { useEffect } from "react"
import "aos/dist/aos.css";
import AOS from "aos";
import { Route, Routes } from "react-router-dom"
import Banner from "./Components/Banner/Banner"
import Header from "./Components/Header/Header"
import Service from "./Components/Services/Service";
import Footer from "./Components/Footer/Footer";

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
					</>
				} />
			</Routes>
			<Footer />
		</>

	)
}

export default App
