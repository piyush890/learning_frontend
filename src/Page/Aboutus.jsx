import React from "react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
  Target,
  Rocket,
  CheckCircle2,
  BookOpen,
  Globe,
  Lightbulb,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
         <Navbar></Navbar>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              About Vellaration Technologies
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Students With
              <span className="text-blue-600"> Real-World Skills</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Learn.VellarationTechnologies.com is a modern EdTech
              platform focused on practical learning, industry-ready
              training, internships, mentorship, and placement
              support for students and freshers.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-200 font-medium">
                Explore Programs
              </button>

              <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all px-6 py-3 rounded-xl font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="w-7 h-7 text-blue-600" />,
              number: "10K+",
              title: "Students Trained",
            },
            {
              icon: <BookOpen className="w-7 h-7 text-blue-600" />,
              number: "25+",
              title: "Professional Courses",
            },
            {
              icon: <Briefcase className="w-7 h-7 text-blue-600" />,
              number: "100+",
              title: "Industry Projects",
            },
            {
              icon: <Award className="w-7 h-7 text-blue-600" />,
              number: "95%",
              title: "Student Satisfaction",
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

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              Who We Are
            </div>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Bridging The Gap Between
              <span className="text-blue-600">
                {" "}
                Learning & Industry
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Vellaration Technologies Pvt. Ltd. is dedicated to
              helping students and freshers gain practical technical
              skills through hands-on learning and live mentorship.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our programs are designed with real-world projects,
              modern technologies, and career-focused guidance to
              help learners become industry-ready professionals.
            </p>

            <div className="space-y-5">
              {[
                "Industry-focused curriculum",
                "Hands-on project experience",
                "Expert mentors & trainers",
                "Internship & placement assistance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>

                  <p className="font-medium text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[40px] p-10 text-white shadow-2xl">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <Target className="w-10 h-10 mb-4" />

                  <h3 className="text-2xl font-bold mb-3">
                    Our Mission
                  </h3>

                  <p className="text-blue-100 leading-7">
                    To empower students with practical technical
                    knowledge, career opportunities, and real-world
                    experience.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <Rocket className="w-10 h-10 mb-4" />

                  <h3 className="text-2xl font-bold mb-3">
                    Our Vision
                  </h3>

                  <p className="text-blue-100 leading-7">
                    To become a leading EdTech platform helping
                    learners transform their careers through
                    innovation and practical learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Why Choose Us
          </div>

          <h2 className="text-4xl font-bold mb-5">
            Learn Beyond Traditional Education
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            We focus on skill-based learning that prepares students
            for internships, freelancing, and full-time careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Live Interactive Classes",
              desc: "Engaging sessions with expert mentors and trainers.",
            },
            {
              title: "Real Industry Projects",
              desc: "Work on projects based on real business scenarios.",
            },
            {
              title: "Internship Certificates",
              desc: "Receive professional certificates after completion.",
            },
            {
              title: "Placement Assistance",
              desc: "Career guidance and interview preparation support.",
            },
            {
              title: "Flexible Learning",
              desc: "Online and hybrid learning modes for convenience.",
            },
            {
              title: "Modern Technologies",
              desc: "Learn trending tools and technologies used in industry.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Learning Journey Today
          </h2>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-8 mb-10">
            Join thousands of students building successful careers
            with practical training, mentorship, and industry-ready
            projects.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-white text-blue-600 hover:bg-blue-50 transition-all px-8 py-4 rounded-2xl font-semibold shadow-lg">
              Enroll Now
            </button>

            <button className="border border-white/30 hover:bg-white/10 transition-all px-8 py-4 rounded-2xl font-semibold">
              Explore Courses
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}