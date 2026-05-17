import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CodeXml,
  FileText,
  Headset,
  Infinity as InfinityIcon,
  Layers,
  Medal,
  MonitorSmartphone,
  PencilLine,
  Puzzle,
  Rocket,
  ScanSearch,
  Server,
  Users,
} from "lucide-react";
import { FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

// ─── Utility: useInView ───────────────────────────────────────────────────────
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1, ...(options ?? {}) }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return [ref, inView];
}

// ─── Floating animation style ────────────────────────────────────────────────
const floatStyle = (delay = 0, duration = 3) => ({
  animation: `float ${duration}s ease-in-out ${delay}s infinite`,
});

// ─── Global CSS injected once ────────────────────────────────────────────────
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

// ─── SVG Illustrations ───────────────────────────────────────────────────────

const StudentIllustration = () => (
  <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    {/* Desk */}
    <rect x="60" y="270" width="300" height="18" rx="9" fill="#E2E8F0"/>
    <rect x="90" y="288" width="10" height="60" rx="5" fill="#CBD5E1"/>
    <rect x="320" y="288" width="10" height="60" rx="5" fill="#CBD5E1"/>
    {/* Laptop base */}
    <rect x="100" y="205" width="220" height="68" rx="10" fill="#1E293B"/>
    <rect x="108" y="210" width="204" height="56" rx="7" fill="#0F172A"/>
    {/* Screen content */}
    <rect x="114" y="216" width="192" height="44" rx="5" fill="#1A2744"/>
    <rect x="120" y="222" width="60" height="6" rx="3" fill="#3B82F6" opacity=".8"/>
    <rect x="120" y="232" width="40" height="4" rx="2" fill="#6366F1" opacity=".6"/>
    <rect x="120" y="240" width="50" height="4" rx="2" fill="#10B981" opacity=".5"/>
    <rect x="185" y="222" width="30" height="30" rx="4" fill="#2563EB" opacity=".3"/>
    <rect x="220" y="222" width="80" height="4" rx="2" fill="#475569" opacity=".4"/>
    <rect x="220" y="230" width="60" height="4" rx="2" fill="#475569" opacity=".3"/>
    <rect x="220" y="238" width="70" height="4" rx="2" fill="#475569" opacity=".2"/>
    {/* Laptop hinge */}
    <rect x="95" y="270" width="230" height="6" rx="3" fill="#334155"/>
    {/* Student body */}
    <ellipse cx="210" cy="355" rx="50" ry="20" fill="#EEF4FF" opacity=".6"/>
    {/* Chair */}
    <rect x="185" y="300" width="50" height="8" rx="4" fill="#94A3B8"/>
    <rect x="195" y="308" width="8" height="40" rx="4" fill="#94A3B8"/>
    <rect x="217" y="308" width="8" height="40" rx="4" fill="#94A3B8"/>
    {/* Torso */}
    <rect x="182" y="210" width="56" height="80" rx="20" fill="#3B82F6"/>
    {/* Arms */}
    <rect x="162" y="225" width="22" height="55" rx="11" fill="#FBBF24"/>
    <rect x="236" y="225" width="22" height="55" rx="11" fill="#FBBF24"/>
    {/* Head */}
    <circle cx="210" cy="190" r="32" fill="#FBBF24"/>
    {/* Hair */}
    <path d="M178 182 Q183 155 210 158 Q237 155 242 182 Q230 165 210 165 Q190 165 178 182Z" fill="#1E293B"/>
    {/* Glasses */}
    <rect x="193" y="185" width="16" height="11" rx="5" fill="none" stroke="#1E293B" strokeWidth="2"/>
    <rect x="211" y="185" width="16" height="11" rx="5" fill="none" stroke="#1E293B" strokeWidth="2"/>
    <line x1="209" y1="190" x2="211" y2="190" stroke="#1E293B" strokeWidth="2"/>
    {/* Eyes */}
    <circle cx="201" cy="190" r="3" fill="#1E293B"/>
    <circle cx="219" cy="190" r="3" fill="#1E293B"/>
    {/* Smile */}
    <path d="M203 200 Q210 206 217 200" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Ear */}
    <ellipse cx="178" cy="192" rx="5" ry="7" fill="#FBBF24"/>
    <ellipse cx="242" cy="192" rx="5" ry="7" fill="#FBBF24"/>
  </svg>
);

const RocketIllustration = () => (
  <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
    <ellipse cx="100" cy="195" rx="35" ry="12" fill="rgba(255,255,255,.15)"/>
    <path d="M100 20 C100 20 70 60 65 120 L135 120 C130 60 100 20 100 20Z" fill="white"/>
    <rect x="65" y="120" width="70" height="40" rx="4" fill="white"/>
    <path d="M65 145 L45 165 L65 160 Z" fill="rgba(255,255,255,.7)"/>
    <path d="M135 145 L155 165 L135 160 Z" fill="rgba(255,255,255,.7)"/>
    <circle cx="100" cy="85" r="15" fill="rgba(37,99,235,.3)" stroke="white" strokeWidth="2"/>
    <path d="M65 160 Q100 180 135 160 L135 165 Q100 185 65 165 Z" fill="rgba(255,150,50,.8)"/>
    <ellipse cx="100" cy="165" rx="18" ry="10" fill="rgba(255,200,50,.6)"/>
    <circle cx="130" cy="50" r="5" fill="rgba(255,255,255,.4)"/>
    <circle cx="75" cy="35" r="3" fill="rgba(255,255,255,.3)"/>
  </svg>
);

// ─── Navbar ──────────────────────────────────────────────────────────────────

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [ref, inView] = useInView();
  const stats = [
    { n:"500+", l:"Students Trained" },
    { n:"100+", l:"Real Projects" },
    { n:"50+",  l:"Hiring Partners" },
  ];
  return (
    <section className="pt-28 pb-20 mesh-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`${inView ? "fade-up" : "opacity-0"}`}>
            <div className="section-tag mb-6">🌟 Summer Training 2026</div>
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.15] mb-5" style={{fontFamily:"Sora"}}>
              Build Real Projects &<br/>Become <span className="gradient-text">Industry Ready</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Master modern tech stacks with live mentorship, real-world projects, and placement support. Learn, build, and launch your dream tech career this summer.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="/form" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-full text-sm">Start Learning →</a>
              <a href="/form" className="bg-white border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-blue-300 transition-all">📅 Book Free Demo</a>
            </div>
            <div className="flex gap-8">
              {stats.map(s => (
                <div key={s.n}>
                  <div className="text-2xl font-bold gradient-text" style={{fontFamily:"Sora"}}>{s.n}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className={`relative ${inView ? "fade-in" : "opacity-0"}`} style={{animationDelay:".2s"}}>
            <div className="relative flex justify-center">
              <img
                src="/student.webp"
                alt="Student learning with technology dashboard"
                className="w-full max-w-xl h-auto rounded-[28px] shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Summer Training Program ──────────────────────────────────────────────────
const SummerProgram = () => {
  const [ref, inView] = useInView();
  const features = [
    { Icon:Rocket, text:"Hands-on Learning" },
    { Icon:Users, text:"Live Expert Mentorship" },
    { Icon:CodeXml, text:"Real Industry Projects" },
    { Icon:Medal, text:"Certification Included" },
    { Icon:BriefcaseBusiness, text:"Placement Assistance" },
  ];
  const details = [
    "45 Days Intensive Program",
    "Live Interactive Classes",
    "Beginner to Advanced Level",
    "Flexible Batch Timings",
  ];
  return (
    <section className="py-14 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`rounded-[28px] border border-blue-50 bg-white shadow-[0_18px_55px_rgba(30,64,175,.10)] overflow-hidden ${inView ? "fade-up" : "opacity-0"}`}>
          <div className="grid lg:grid-cols-[360px_1fr_280px] items-center gap-6 lg:gap-8 p-6 md:p-8 lg:px-10 lg:py-9">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/summer.webp"
                alt="Summer training program"
                className="w-full max-w-[330px] h-auto object-contain"
              />
            </div>

            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-4" style={{fontFamily:"Sora"}}>
                Summer Training Program
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                Make this summer productive. Gain in-demand skills, build real projects and get placement support.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
                {features.map((feature) => (
                  <div key={feature.text} className="flex flex-col items-center text-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-700 shadow-sm shadow-indigo-100">
                      <feature.Icon size={25} strokeWidth={2.2} />
                    </div>
                    <span className="text-sm font-bold text-slate-800 leading-snug">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:border-l lg:border-slate-200 lg:pl-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-7">
                {details.map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={21} strokeWidth={2.4} />
                    <span className="text-sm font-bold text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
              <a href="/form" className="btn-primary inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-3.5 rounded-lg text-sm w-full sm:w-auto lg:w-full">
                Explore Program <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Tech Stack ───────────────────────────────────────────────────────────────
const TechStack = () => {
  const [ref, inView] = useInView();
  const techs = [
    { name:"React", color:"#149ECA", Icon: SiReact },
    { name:"Flutter", color:"#02569B", Icon: SiFlutter },
    { name:"Node.js", color:"#339933", Icon: SiNodedotjs },
    { name:"Express.js", color:"#6B7280", Icon: SiExpress },
    { name:"MongoDB", color:"#47A248", Icon: SiMongodb },
    { name:"Firebase", color:"#FFCA28", Icon: SiFirebase },
    { name:"AWS", color:"#FF9900", Icon: FaAws },
    { name:"Docker", color:"#2496ED", Icon: SiDocker },
    { name:"Git & GitHub", color:"#F05032", Icon: FaGitAlt },
  ];
  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <p className={`text-center text-xs uppercase font-extrabold text-indigo-300 tracking-[.18em] mb-7 ${inView ? "fade-up" : "opacity-0"}`}>
          Trusted By Learners. Built With The Best
        </p>
        <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-5 ${inView ? "fade-up" : "opacity-0"}`} style={{animationDelay:".15s"}}>
          {techs.map(t => (
            <div key={t.name} className="tech-pill">
              <t.Icon className="text-[32px] shrink-0" style={{color:t.color}} aria-hidden="true" />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Courses ──────────────────────────────────────────────────────────────────
const Courses = () => {
  const [ref, inView] = useInView();
  const courses = [
    {
      Icon:CodeXml, color:"#EEF2FF", accent:"#2563EB",
      title:"Frontend Development",
      desc:"Build modern, responsive, and interactive user interfaces.",
      skills:["React","Tailwind","OSAP"],
      duration:"12 Weeks"
    },
    {
      Icon:Server, color:"#F3F0FF", accent:"#6D28D9",
      title:"Backend Development",
      desc:"Build scalable APIs, authentication systems & server applications.",
      skills:["Node.js","Express","MongoDB"],
      duration:"14 Weeks"
    },
    {
      Icon:Layers, color:"#EEF2FF", accent:"#2563EB",
      title:"Full Stack Development",
      desc:"End-to-end web development with MERN stack & real projects.",
      skills:["MERN","JWT","API"],
      duration:"20 Weeks"
    },
    {
      Icon:MonitorSmartphone, color:"#E7F6F8", accent:"#0891B2",
      title:"Flutter Development",
      desc:"Build high-performance cross-platform mobile applications.",
      skills:["Flutter","Dart","Firebase"],
      duration:"20 Weeks"
    },
    {
      Icon:BookOpenText, color:"#E7F6F8", accent:"#2563EB",
      title:"Python Programming",
      desc:"Learn Python programming from basics to advanced level.",
      skills:["Python","OOP","DSA"],
      duration:"14 Weeks"
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8 ${inView ? "fade-up" : "opacity-0"}`}>
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-950 mb-3" style={{fontFamily:"Sora"}}>
              Premium Learning Tracks
            </h2>
            <p className="text-slate-500 text-sm lg:text-base">Choose your path to excellence in the digital economy.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:text-blue-800 transition-colors">
            View All Courses <ArrowRight size={18} />
          </a>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-5 ${inView ? "fade-up" : "opacity-0"}`} style={{animationDelay:".2s"}}>
          {courses.map(c => (
            <div key={c.title} className="course-card p-5 min-h-[315px] flex flex-col">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-5" style={{background:c.color}}>
                <c.Icon size={34} strokeWidth={2.1} style={{color:c.accent}} />
              </div>
              <h3 className="font-extrabold text-slate-950 text-xl leading-tight mb-4" style={{fontFamily:"Sora"}}>{c.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.skills.map(s => (
                  <span key={s} className="text-xs bg-indigo-50 text-slate-700 rounded-lg px-2.5 py-1 font-bold">{s}</span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-800">{c.duration}</span>
                <a href="/form" className="bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md shadow-blue-200 hover:bg-blue-800 transition-colors">Enroll Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Why Vellaration (Bento) ──────────────────────────────────────────────────
const WhyVellaration = () => {
  const [ref, inView] = useInView();
  const cards = [
    { Icon:ScanSearch, title:"Live 1-on-1 Mentorship", desc:"Learn directly from industry experts and get real-time guidance." },
    { Icon:Rocket, title:"Project-Led Curriculum", desc:"Build real-world projects that solve real-world problems." },
    { Icon:FileText, title:"Resume Workshop", desc:"Create a resume that stands out and gets you noticed." },
    { Icon:Users, title:"Mock Interviews", desc:"Practice with experts and improve your interview skills." },
    { Icon:BriefcaseBusiness, title:"Placement Support", desc:"Access to 50+ hiring partners and placement assistance." },
    { Icon:FaGithub, title:"GitHub & Portfolio", desc:"Build your portfolio, showcase projects and grow on GitHub." },
    { Icon:InfinityIcon, title:"Lifetime Access", desc:"Access all learning materials anytime, anywhere." },
    { Icon:Headset, title:"Doubt Support", desc:"24/7 doubt support to help you stay on track." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-8 ${inView ? "fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-950 mb-4" style={{fontFamily:"Sora"}}>
            Why Students Choose Vellaration
          </h2>
          <p className="text-slate-500 text-sm lg:text-base">
            We bridge the gap between academic learning and professional industry requirements.
          </p>
        </div>
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 ${inView ? "fade-up" : "opacity-0"}`} style={{animationDelay:".15s"}}>
          {cards.map(c => (
            <div key={c.title} className="bg-white border border-slate-100 rounded-2xl p-5 min-h-[142px] flex items-start gap-5 shadow-sm shadow-blue-50">
              <div className="w-16 h-16 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 text-blue-700">
                <c.Icon size={34} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-950 text-base mb-3" style={{fontFamily:"Sora"}}>{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Real Projects ────────────────────────────────────────────────────────────
const Projects = () => {
  const [ref, inView] = useInView();
  const projects = [
    {
      name:"E-Commerce Platform",
      desc:"Full-featured store with cart, payments, and real-time inventory.",
      tags:["React","Node.js","MongoDB","Stripe"],
      color:"#EFF6FF", accent:"#2563EB",
      preview: (
        <svg viewBox="0 0 260 140" className="w-full">
          <rect width="260" height="140" fill="#1A2744" rx="8"/>
          <rect x="8" y="8" width="80" height="124" rx="6" fill="#0F172A"/>
          <rect x="14" y="14" width="68" height="12" rx="4" fill="#2563EB" opacity=".6"/>
          {[30,46,62,78].map((y,i) => <rect key={i} x="14" y={y} width="68" height="10" rx="3" fill="#1E3A5F" opacity=".7"/>)}
          <rect x="96" y="8" width="156" height="52" rx="6" fill="#0F172A"/>
          <text x="102" y="26" fill="#3B82F6" fontSize="8" fontFamily="Sora" fontWeight="700">E-Commerce Store</text>
          <rect x="102" y="30" width="100" height="4" rx="2" fill="#1E3A5F"/>
          <rect x="102" y="38" width="70" height="4" rx="2" fill="#1E3A5F"/>
          <rect x="96" y="66" width="73" height="66" rx="6" fill="#0F172A"/>
          <rect x="175" y="66" width="77" height="66" rx="6" fill="#0F172A"/>
          {[0,1].map(i => (
            <g key={i}>
              <rect x={100+i*79} y={70} width={65} height={38} rx="4" fill="#1A2744"/>
              <rect x={100+i*79} y={112} width={40} height={5} rx="2" fill="#334155"/>
              <rect x={100+i*79} y={120} width={25} height={5} rx="2" fill="#2563EB" opacity=".7"/>
            </g>
          ))}
        </svg>
      )
    },
    {
      name:"AI Chat Application",
      desc:"Intelligent chatbot with NLP, context awareness, and analytics dashboard.",
      tags:["React","Python","OpenAI","Firebase"],
      color:"#F5F3FF", accent:"#7C3AED",
      preview: (
        <svg viewBox="0 0 260 140" className="w-full">
          <rect width="260" height="140" fill="#0F0A1E" rx="8"/>
          <rect x="8" y="8" width="244" height="22" rx="6" fill="#1E1340"/>
          <text x="18" y="23" fill="#7C3AED" fontSize="9" fontFamily="Sora" fontWeight="700">AI Chat • Vellaration Assistant</text>
          <rect x="8" y="36" width="244" height="96" rx="6" fill="#110D26"/>
          {/* Chat bubbles */}
          <rect x="18" y="44" width="120" height="20" rx="8" fill="#1E1340"/>
          <text x="26" y="58" fill="#A78BFA" fontSize="7" fontFamily="Sora">Hello! How can I help you today?</text>
          <rect x="122" y="70" width="122" height="20" rx="8" fill="#3730A3"/>
          <text x="130" y="84" fill="white" fontSize="7" fontFamily="Sora">Build me a React dashboard</text>
          <rect x="18" y="96" width="150" height="20" rx="8" fill="#1E1340"/>
          <text x="26" y="110" fill="#A78BFA" fontSize="7" fontFamily="Sora">Sure! Here's the code structure...</text>
          <rect x="18" y="122" width="200" height="8" rx="4" fill="#1E1340"/>
          <text x="26" y="129" fill="#475569" fontSize="6" fontFamily="Sora">Type a message...</text>
        </svg>
      )
    },
    {
      name:"Finance Dashboard",
      desc:"Real-time financial tracker with charts, analytics, and expense reports.",
      tags:["React","D3.js","Node.js","PostgreSQL"],
      color:"#F0FDF4", accent:"#16A34A",
      preview: (
        <svg viewBox="0 0 260 140" className="w-full">
          <rect width="260" height="140" fill="#0A1628" rx="8"/>
          <rect x="8" y="8" width="60" height="28" rx="6" fill="#0F2040"/>
          <text x="14" y="18" fill="#22C55E" fontSize="6" fontFamily="Sora" fontWeight="700">Revenue</text>
          <text x="14" y="30" fill="white" fontSize="10" fontFamily="Sora" fontWeight="700">$42.8K</text>
          <rect x="76" y="8" width="60" height="28" rx="6" fill="#0F2040"/>
          <text x="82" y="18" fill="#3B82F6" fontSize="6" fontFamily="Sora" fontWeight="700">Expenses</text>
          <text x="82" y="30" fill="white" fontSize="10" fontFamily="Sora" fontWeight="700">$18.2K</text>
          <rect x="144" y="8" width="60" height="28" rx="6" fill="#0F2040"/>
          <text x="150" y="18" fill="#A78BFA" fontSize="6" fontFamily="Sora" fontWeight="700">Profit</text>
          <text x="150" y="30" fill="white" fontSize="10" fontFamily="Sora" fontWeight="700">$24.6K</text>
          <rect x="8" y="44" width="156" height="88" rx="6" fill="#0F2040"/>
          {/* Bar chart */}
          {[40,65,30,80,55,70,45].map((h,i) => (
            <rect key={i} x={16+i*22} y={128-h} width="14" height={h} rx="3"
              fill={`rgba(${i===3?"34,197,94":"59,130,246"},${i===3?".9":".6"})`}/>
          ))}
          <rect x="172" y="44" width="80" height="88" rx="6" fill="#0F2040"/>
          <text x="180" y="58" fill="#64748B" fontSize="6" fontFamily="Sora">Transactions</text>
          {[70,85,60,90,75].map((v,i) => (
            <g key={i}>
              <rect x="180" y={64+i*13} width={v*0.5} height="7" rx="3" fill={`rgba(59,130,246,${.3+i*.1})`}/>
              <text x={180+v*0.5+3} y={70+i*13} fill="#64748B" fontSize="5" fontFamily="Sora">{v}%</text>
            </g>
          ))}
        </svg>
      )
    },
    {
      name:"Food Delivery App",
      desc:"Full-stack mobile app with live tracking, payments, and order management.",
      tags:["Flutter","Firebase","Google Maps","Razorpay"],
      color:"#FFF7ED", accent:"#EA580C",
      preview: (
        <svg viewBox="0 0 260 140" className="w-full">
          <rect width="260" height="140" fill="#0A0A0A" rx="8"/>
          {/* Phone mockup */}
          <rect x="70" y="6" width="120" height="128" rx="16" fill="#1A1A2E"/>
          <rect x="74" y="10" width="112" height="120" rx="12" fill="#16213E"/>
          {/* App header */}
          <rect x="74" y="10" width="112" height="28" rx="12" fill="#0F3460"/>
          <text x="100" y="28" fill="white" fontSize="9" fontFamily="Sora" fontWeight="700">🍕 FoodFast</text>
          {/* Promo banner */}
          <rect x="80" y="44" width="100" height="30" rx="8" fill="#E11D48" opacity=".9"/>
          <text x="90" y="56" fill="white" fontSize="7" fontFamily="Sora" fontWeight="700">30% OFF Today!</text>
          <text x="90" y="66" fill="rgba(255,255,255,.7)" fontSize="6" fontFamily="Sora">Use code: VELLAR</text>
          {/* Food cards */}
          {[0,1].map(i => (
            <g key={i}>
              <rect x={80+i*52} y={80} width={44} height={38} rx="6" fill="#1A1A2E"/>
              <rect x={82+i*52} y={82} width={40} height={20} rx="4" fill={i===0?"#E11D48":"#EA580C"} opacity=".4"/>
              <text x={84+i*52} y={93} fill="white" fontSize="8" fontFamily="Sora">{i===0?"🍕":"🍔"}</text>
              <rect x={82+i*52} y={104} width={25} height={4} rx="2" fill="#334155"/>
              <rect x={82+i*52} y={111} width={15} height={3} rx="2" fill="#EA580C" opacity=".7"/>
            </g>
          ))}
          {/* Nav bar */}
          <rect x="74" y="118" width="112" height="12" rx="8" fill="#0F3460"/>
          {["🏠","🔍","🛒","👤"].map((e,i) => (
            <text key={i} x={84+i*28} y={127} fill="white" fontSize="7" fontFamily="Sora">{e}</text>
          ))}
        </svg>
      )
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-14 ${inView ? "fade-up" : "opacity-0"}`}>
          <div className="section-tag mx-auto mb-4">🚀 Real Projects</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{fontFamily:"Sora"}}>
            Projects You'll <span className="gradient-text">Actually Build</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">Not toy examples — real, deployable applications that belong in your portfolio.</p>
        </div>
        <div className={`grid md:grid-cols-2 gap-6 ${inView ? "fade-up" : "opacity-0"}`} style={{animationDelay:".2s"}}>
          {projects.map(p => (
            <div key={p.name} className="card-hover rounded-2xl overflow-hidden border border-slate-100">
              <div className="p-1">{p.preview}</div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1" style={{fontFamily:"Sora"}}>{p.name}</h3>
                <p className="text-slate-500 text-sm mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs rounded-lg px-2.5 py-1 font-medium border" style={{background:p.color, color:p.accent, borderColor:p.color}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Career Roadmap ───────────────────────────────────────────────────────────
const Roadmap = () => {
  const [ref, inView] = useInView();
  const steps = [
    { week:"Week 1-2", label:"Fundamentals", Icon:CalendarDays },
    { week:"Week 3-4", label:"Core Concepts", Icon:Puzzle },
    { week:"Week 5-6", label:"Build Projects", Icon:ClipboardList },
    { week:"Week 7", label:"Advanced Skills", Icon:Medal },
    { week:"Week 8", label:"Interview Prep", Icon:PencilLine },
    { week:"Placement", label:"& Launch", Icon:Rocket },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-8 ${inView ? "fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-950" style={{fontFamily:"Sora"}}>
            Your Path to Career Success
          </h2>
        </div>
        {/* Desktop timeline */}
        <div className={`hidden lg:block ${inView ? "fade-up" : "opacity-0"}`} style={{animationDelay:".2s"}}>
          <div className="relative px-10">
            <div className="grid grid-cols-6 gap-0">
              {steps.map((s, i) => (
                <div key={s.week} className="relative flex flex-col items-center text-center">
                  {i < steps.length - 1 && (
                    <div className="absolute top-10 left-[calc(50%+44px)] right-[calc(-50%+44px)] border-t-2 border-dotted border-blue-300" />
                  )}
                  {i === steps.length - 2 && (
                    <ArrowRight className="absolute top-[31px] -right-[18px] text-blue-700" size={24} strokeWidth={2.4} />
                  )}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-blue-700 mb-5">
                    <s.Icon size={34} strokeWidth={2.3} />
                  </div>
                  <div className="font-extrabold text-slate-950 text-base mb-1" style={{fontFamily:"Sora"}}>{s.week}</div>
                  <div className="text-slate-600 text-sm leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile timeline */}
        <div className={`lg:hidden flex flex-col gap-4 ${inView ? "fade-up" : "opacity-0"}`} style={{animationDelay:".2s"}}>
          {steps.map((s) => (
            <div key={s.week} className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-blue-700 shrink-0">
                <s.Icon size={26} strokeWidth={2.3} />
              </div>
              <div>
                <div className="font-extrabold text-slate-950 text-sm" style={{fontFamily:"Sora"}}>{s.week}</div>
                <div className="text-slate-600 text-sm">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Final CTA ────────────────────────────────────────────────────────────────
const FinalCTA = () => {
  const [ref, inView] = useInView();
  return (
    <section className="py-20 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto rounded-3xl overflow-hidden relative ${inView ? "fade-up" : "opacity-0"}`}
        style={{background:"linear-gradient(135deg,#1D4ED8,#7C3AED,#0891B2)"}}>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{background:"white",transform:"translate(30%,-30%)"}}/>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{background:"white",transform:"translate(-30%,30%)"}}/>
        <div className="relative z-10 p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{fontFamily:"Sora"}}>
              Launch Your Tech Career<br/>This Summer 🚀
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join thousands of students who are building their future with Vellaration Technologies.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="/form" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-full text-sm hover:shadow-xl transition-all hover:-translate-y-1">
                Enroll Now →
              </a>
              <a href="/form" className="border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all">
                Talk to Counselor
              </a>
            </div>
          </div>
          <div style={floatStyle(0,3)}>
            <RocketIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

// ─── App ──────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const projectsRef = useRef(null);
  const roadmapRef = useRef(null);
  const placementRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    let ref = null;
    switch (section) {
      case "home":
        ref = heroRef;
        break;
      case "courses":
        ref = coursesRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "roadmap":
        ref = roadmapRef;
        break;
      case "placement":
        ref = placementRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        ref = heroRef;
    }
    
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen bg-white">
        <Navbar scrollToSection={scrollToSection} />
        <div ref={heroRef}><Hero /></div>
        <SummerProgram />
        <TechStack />
        <div ref={coursesRef}><Courses /></div>
        <WhyVellaration />
        <div ref={projectsRef}><Projects /></div>
        <div ref={roadmapRef}><Roadmap /></div>
        <div ref={placementRef}><FinalCTA /></div>
        <div ref={contactRef}><Footer /></div>
      </div>
    </>
  );
}
