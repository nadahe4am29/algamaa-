import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import BrandLogo from "./BrandLogo";

const Footer = () => {
	const { copy } = useLanguage();

	return (
		<footer className="hero-gradient relative overflow-hidden text-white">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgb(255_255_255/0.08),transparent_55%)]" />
			<div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
				<div className="space-y-4">
					<BrandLogo title={copy.hero.logoTitle} compact />
					<p className="max-w-xs text-sm leading-7 text-white/80">{copy.footer.about}</p>
					<p className="text-sm font-semibold text-white/70">{copy.footer.license}</p>
				</div>

				<div>
					<h3 className="mb-4 text-lg font-extrabold">{copy.footer.quickLinksTitle}</h3>
					<ul className="space-y-3 text-sm text-white/80">
						{copy.footer.quickLinks.map((item) => (
							<li key={item.id}>
								<Link to={item.to} className="transition hover:text-white">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="mb-4 text-lg font-extrabold">{copy.footer.followTitle}</h3>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noreferrer"
						className="inline-flex size-10 items-center justify-center rounded-full bg-white/10"
						aria-label="Facebook"
					>
						<svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
							<path d="M13.5 9H16V6h-2.5C11.6 6 11 7.3 11 8.8V10H9v3h2v8h3v-8h2.4l.6-3H14V8.9c0-.5.3-.9 1.5-.9Z" />
						</svg>
					</a>
				</div>

				<div className="space-y-4">
					<h3 className="text-lg font-extrabold">{copy.footer.contactTitle}</h3>
					<a href={`tel:${copy.footer.phone}`} className="flex items-center gap-3 text-sm text-white/85">
						<Phone className="size-4 shrink-0" />
						<span dir="ltr">{copy.footer.phone}</span>
					</a>
					<a href={`mailto:${copy.footer.email}`} className="flex items-center gap-3 text-sm text-white/85">
						<Mail className="size-4 shrink-0" />
						<span dir="ltr">{copy.footer.email}</span>
					</a>
					<p className="flex items-start gap-3 text-sm text-white/85">
						<MapPin className="mt-0.5 size-4 shrink-0" />
						<span>{copy.footer.address}</span>
					</p>
					<div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
						<iframe
							title="Algamaa location"
							src="https://maps.google.com/maps?q=Nasr%20City%20Cairo&t=&z=14&ie=UTF8&iwloc=&output=embed"
							className="h-36 w-full"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div className="border-t border-white/10 py-5 text-center text-sm text-white/70">{copy.footer.copyright}</div>
		</footer>
	);
};

export default Footer;
