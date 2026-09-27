import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/jobs" element={<PlaceholderPage page="jobs" />} />
					<Route path="/about" element={<PlaceholderPage page="about" />} />
					<Route path="/faq" element={<PlaceholderPage page="faq" />} />
					<Route path="/contact" element={<PlaceholderPage page="contact" />} />
					<Route path="/services" element={<PlaceholderPage page="services" />} />
					<Route path="/register" element={<PlaceholderPage page="register" />} />
					<Route path="/privacy" element={<PlaceholderPage page="privacy" />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
