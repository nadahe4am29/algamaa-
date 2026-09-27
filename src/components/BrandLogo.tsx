import logo from "../assets/logo.png";

type BrandLogoProps = {
	title: string;
	tagline?: string;
	className?: string;
	compact?: boolean;
};

const BrandLogo = ({ title, tagline, className = "", compact = false }: BrandLogoProps) => {
	return (
		<div className={`flex flex-col items-center text-center ${className}`}>
			<img
				src={logo}
				alt={title}
				className={`object-contain ${compact ? "h-16 w-16" : "h-44 w-44 md:h-52 md:w-52"}`}
			/>
			{tagline ? <p className="mt-2 max-w-[14rem] text-sm text-white/75">{tagline}</p> : null}
		</div>
	);
};

export default BrandLogo;
