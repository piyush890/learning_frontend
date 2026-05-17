import React from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Users,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const teamMembers = [
  {
    name: "Piyush Prajapati",
    role: "Founder & Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Leading product innovation, development, and mentorship programs at Vellaration Technologies.",
  },
  {
    name: "Aarav Sharma",
    role: "Frontend Mentor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Specialized in React, Next.js, Tailwind CSS, and modern frontend architectures.",
  },
  {
    name: "Ananya Verma",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    description:
      "Designing modern and intuitive user experiences for digital products and platforms.",
  },
  {
    name: "Rohit Singh",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    description:
      "Expert in Node.js, databases, APIs, cloud services, and scalable backend systems.",
  },
  {
    name: "Sneha Kapoor",
    role: "Placement Coordinator",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    description:
      "Helping students with career guidance, resume building, and placement opportunities.",
  },
  {
    name: "Karan Mehta",
    role: "Flutter Mentor",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Mentoring students in Flutter app development and cross-platform mobile solutions.",
  },
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meet Our Experts
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Our Amazing
              <span className="text-blue-600"> Team</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Meet the passionate mentors, developers, designers,
              and professionals helping students build successful
              careers with real-world skills and practical learning.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="w-7 h-7 text-blue-600" />,
              number: "25+",
              title: "Team Members",
            },
            {
              icon: <Award className="w-7 h-7 text-blue-600" />,
              number: "10K+",
              title: "Students Mentored",
            },
            {
              icon: <Briefcase className="w-7 h-7 text-blue-600" />,
              number: "100+",
              title: "Projects Delivered",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold mb-2">
                {item.number}
              </h2>

              <p className="text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Our Professionals
          </div>

          <h2 className="text-4xl font-bold mb-5">
            The People Behind Vellaration
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            Our team combines technical expertise, mentorship, and
            industry experience to help students achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="text-blue-200 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 leading-7 mb-6">
                  {member.description}
                </p>

                {/* Socials */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-11 h-11 rounded-2xl bg-blue-50 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-2xl bg-blue-50 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-blue-600"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="w-11 h-11 rounded-2xl bg-blue-50 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-blue-600"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Team Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want To Join Our Team?
          </h2>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-8 mb-10">
            We are always looking for passionate mentors,
            developers, designers, and innovators to help shape the
            future of learning.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-white text-blue-600 hover:bg-blue-50 transition-all px-8 py-4 rounded-2xl font-semibold shadow-lg">
              Apply Now
            </button>

            <button className="border border-white/30 hover:bg-white/10 transition-all px-8 py-4 rounded-2xl font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}