export default function Navbar() {
    const navItems = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-full bg-gray-950/70 backdrop-blur-md">
            <div className="flex gap-8 text-sm font-medium px-4">
                {navItems.map(({ href, label }) => (
                    <a href={href} className="hover:text-purple-400 transition-colors text-base">{label}</a>
                ))}
            </div>
        </nav>
    )
}