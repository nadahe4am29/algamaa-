import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const { copy, toggleLanguage } = useLanguage();
	const { theme, toggleTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const isActive = (to: string) => {
		if (to === "/") {
			return location.pathname === "/";
		}
		if (to.startsWith("/#")) {
			return location.pathname === "/" && location.hash === to.slice(1);
		}
		return location.pathname === to;
	};

	const navClassName = (to: string) =>
		`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
			isActive(to) ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
		}`;

	return (
		<header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
			<div className="bg-card/95 mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-full px-3 py-2 backdrop-blur-xl">
				<nav className="hidden min-w-0 flex-1 items-center gap-1 xl:flex">
					{copy.nav.map((item) => {
						if (item.to.startsWith("/#")) {
							return (
								<Link key={item.id} to={item.to} className={navClassName(item.to)}>
									{item.label}
								</Link>
							);
						}

						return (
							<NavLink key={item.id} to={item.to} end={item.to === "/"} className={navClassName(item.to)}>
								{item.label}
							</NavLink>
						);
					})}
				</nav>

				<button
					type="button"
					className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white xl:hidden"
					onClick={() => setOpen((value) => !value)}
					aria-label={open ? "Close menu" : "Open menu"}
				>
					{open ? <X className="size-5" /> : <Menu className="size-5" />}
				</button>

				<div className="flex shrink-0 items-center gap-2">
					<button
						type="button"
						onClick={toggleTheme}
						className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 text-white"
						aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
					>
						{theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
					</button>
					<button
						type="button"
						onClick={toggleLanguage}
						className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white/5 px-3 text-sm font-bold text-white"
					>
						<span>{copy.languageLabel}</span>
						<Globe className="size-4" />
					</button>
					<Link
						to="/register"
						className="gradient-primary inline-flex h-10 items-center rounded-full px-5 text-sm font-bold text-white"
					>
						{copy.register}
					</Link>
				</div>
			</div>

			{open ? (
				<nav className="bg-card/95 mx-auto mt-2 grid max-w-[1400px] gap-1 rounded-3xl px-4 py-3 xl:hidden">
					{copy.nav.map((item) => (
						<NavLink
							key={item.id}
							to={item.to}
							onClick={() => setOpen(false)}
							className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
								isActive(item.to) ? "bg-white/10 text-white" : "text-white/70"
							}`}
						>
							{item.label}
						</NavLink>
					))}
				</nav>
			) : null}
		</header>
	);
};

export default Navbar;
