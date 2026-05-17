import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navi = useNavigate();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const menuActions = (scrollParam) =>{
    if(scrollToSection) scrollToSection(scrollParam.toLowerCase());
    else {
        navi("/");
    }
  }
  const links = ["Home","Courses","Projects","Roadmap","Placement","Contact"];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100" : "bg-white/80 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-10 w-auto" />
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button
              key={l}
              onClick={() => menuActions(l)}
              className="nav-link text-left cursor-pointer"
            >
              {l}
            </button>
          ))}
        </div>
        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/form" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-1.5">Login</a>
          <a href="/form" className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-full">Get Started →</a>
        </div>
        {/* Mobile toggle */}
        <button className="md:hidden text-slate-700 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <button
              key={l}
              onClick={() => {
                scrollToSection(l.toLowerCase());
                setMobileOpen(false);
              }}
              className="text-slate-700 font-medium text-sm py-1 text-left cursor-pointer hover:text-blue-600 transition-colors"
            >
              {l}
            </button>
          ))}
          <a href="#" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2">Get Started →</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;