import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors";

  const variants = {
    primary: "bg-glimmy-walnut text-glimmy-cream hover:bg-glimmy-charcoal",
    secondary:
      "bg-transparent border border-glimmy-walnut text-glimmy-walnut hover:bg-glimmy-walnut hover:text-glimmy-cream",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to)
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
