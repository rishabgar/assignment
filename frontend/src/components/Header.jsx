import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const menuItems = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  //   { to "/about", label: "About" },
  //   { to "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="backdrop-blur bg-white/70 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-500"
        >
          MyCMS
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative py-1 px-1 text-gray-700 hover:text-blue-600 transition ${
                location.pathname === item.to
                  ? "font-semibold text-blue-600"
                  : ""
              }`}
            >
              <span className="group">
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded transition-transform duration-300 ${
                    location.pathname === item.to
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-56" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-2 bg-white/95">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`py-2 px-3 rounded-md ${
                location.pathname === item.to
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
