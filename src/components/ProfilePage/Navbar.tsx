export default function Navbar() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-gray-950/70 px-6 py-4 backdrop-blur-md">
      <div className="flex gap-8 px-4 text-sm font-medium">
        {navItems.map(({ href, label }) => (
          <a href={href} className="text-base transition-colors hover:text-purple-400">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
