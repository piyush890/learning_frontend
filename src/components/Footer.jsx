const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
    * { box-sizing: border-box; }
    body { font-family: 'DM Sans', sans-serif; scroll-behavior: smooth; }
    h1, h2, h3, h4 { font-family: 'Sora', sans-serif; }
    @keyframes float {
      0%,100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(28px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity:0; } to { opacity:1; }
    }
    @keyframes pulse-slow {
      0%,100% { opacity:.4; transform:scale(1); }
      50% { opacity:.7; transform:scale(1.08); }
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    .fade-up { animation: fadeUp .65s ease both; }
    .fade-in { animation: fadeIn .65s ease both; }
    .gradient-text {
      background: linear-gradient(135deg, #2563EB, #7C3AED);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .card-hover {
      transition: transform .25s ease, box-shadow .25s ease;
    }
    .card-hover:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 50px rgba(37,99,235,.12);
    }
    .btn-primary {
      background: linear-gradient(135deg, #2563EB, #7C3AED);
      transition: all .2s ease;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(37,99,235,.35);
    }
    .nav-link {
      position: relative;
      color: #475569;
      transition: color .2s;
      font-size: 14px;
      font-weight: 500;
    }
    .nav-link::after {
      content:'';
      position:absolute;
      bottom:-4px; left:0;
      width:0; height:2px;
      background: linear-gradient(90deg,#2563EB,#7C3AED);
      transition: width .25s ease;
      border-radius:2px;
    }
    .nav-link:hover { color:#2563EB; }
    .nav-link:hover::after { width:100%; }
    .mesh-bg {
      background:
        radial-gradient(ellipse at 20% 20%, rgba(37,99,235,.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(124,58,237,.08) 0%, transparent 50%),
        radial-gradient(ellipse at 60% 10%, rgba(6,182,212,.06) 0%, transparent 40%),
        #F8FAFC;
    }
    .glass-card {
      background: rgba(255,255,255,.85);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,.7);
    }
    .timeline-dot {
      width:40px; height:40px;
      border-radius:50%;
      background: linear-gradient(135deg,#2563EB,#7C3AED);
      display:flex; align-items:center; justify-content:center;
      color:white; font-weight:700; font-size:13px;
      flex-shrink:0;
      box-shadow: 0 4px 16px rgba(37,99,235,.3);
    }
    .section-tag {
      display:inline-flex; align-items:center; gap:6px;
      background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(124,58,237,.1));
      border:1px solid rgba(37,99,235,.2);
      border-radius:999px;
      padding:5px 14px;
      font-size:12px; font-weight:600;
      color:#2563EB;
      letter-spacing:.05em;
      text-transform:uppercase;
    }
    .bento-card {
      background:white;
      border:1px solid #EEF4FF;
      border-radius:16px;
      padding:24px;
      transition: all .25s ease;
    }
    .bento-card:hover {
      border-color:rgba(37,99,235,.25);
      box-shadow: 0 12px 40px rgba(37,99,235,.1);
      transform:translateY(-3px);
    }
    .tech-pill {
      display:flex; align-items:center; gap:8px;
      padding:8px 10px;
      font-size:14px; font-weight:700;
      color:#111827;
      transition: all .2s;
      white-space:nowrap;
    }
    .tech-pill:hover {
      color:#2563EB;
      transform:translateY(-2px);
    }
    .course-card {
      background:white;
      border:1px solid #EEF4FF;
      border-radius:20px;
      overflow:hidden;
      transition: all .25s ease;
    }
    .course-card:hover {
      transform:translateY(-6px);
      box-shadow:0 24px 60px rgba(37,99,235,.12);
      border-color:rgba(37,99,235,.2);
    }
  `}</style>
);
const Footer = () => {
const sections = {
  Courses: [
    { label: "Frontend Dev", href: "/" },
    { label: "Backend Dev", href: "/" },
    { label: "Full Stack", href: "/" },
    { label: "Flutter", href: "/" },
    { label: "Python", href: "/" },
  ],

  Company: [
    { label: "About Us", href: "/aboutus" },
    // { label: "Our Team", href: "/ourteam" },
    { label: "Careers", href: "/careers" },
  ],

  Resources: [
    { label: "Roadmap", href: "/" },
    { label: "Projects", href: "/" },
  ],
};
  return (

    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
          <GlobalStyles/>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
            
                <div className="flex items-center gap-3">
          <img src="/logo.png" className="h-10 w-auto" />
        </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Empowering students with real skills, live mentorship, and placement support to launch world-class tech careers.
            </p>
            <div className="flex gap-3">
              {["Twitter","LinkedIn","GitHub","YouTube","Instagram"].map(s => (
                <a key={s} href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-700 transition-all text-xs font-semibold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
         
{
  Object.entries(sections).map(([title, links]) => (
    <div key={title}>
      <h4
        className="text-white font-semibold text-sm mb-4"
        style={{ fontFamily: "Sora" }}
      >
        {title}
      </h4>

      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))
}
        </div>
        {/* Contact strip */}
        <div className="grid md:grid-cols-2 gap-4 mb-10  p-5 bg-slate-800/50 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="text-blue-400 text-lg">📧</div>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">Email</div>
              <div className="text-sm text-white">vellaration@vellarationtechnologies.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-blue-400 text-lg">📞</div>
            <div>
              <div className="text-xs text-slate-500 mb-0.5">Phone</div>
              <div className="text-sm text-white">+91 6306804362</div>
            </div>
          </div>
       
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2025 Vellaration Technologies. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/privacy&policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms&conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="/refundPolicy" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
