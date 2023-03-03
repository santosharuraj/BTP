import FindFireIndex from "./components/FindFireIndexPage.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Report from "./components/Report.jsx";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/findF&EI" element={<FindFireIndex />} />
					<Route path="/report" element={<Report />} />
					<Route path="/contactus" element={<ContactUs />} />
					<Route path="/profile" element={<UserProfile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
