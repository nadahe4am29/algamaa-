import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

const MainLayout = () => {
	return (
		<div className="bg-background relative min-h-svh text-[var(--text)]">
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			<WhatsAppButton />
		</div>
	);
};

export default MainLayout;
