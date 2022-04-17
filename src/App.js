import { Route, Routes } from "react-router-dom"
import Banner from "./Components/Banner/Banner"
import Header from "./Components/Header/Header"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Banner />} />
			</Routes>
		</>

	)
}

export default App
