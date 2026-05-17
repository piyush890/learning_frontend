import React from "react";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  BookOpen,
  Award,
  Briefcase,
  Ban,
  AlertTriangle,
  RefreshCcw,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/NavBar";

const sections = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Services Offered",
    items: [
      "Online training programs",
      "Summer training internships",
      "Live mentorship",
      "Real-world project training",
      "Internship certificates",
      "Placement assistance",
      "Skill development courses",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "User Responsibilities",
    items: [
      "Provide accurate information",
      "Maintain account confidentiality",
      "Use the platform legally",
      "Respect mentors, staff, and learners",
    ],
  },
  {
    icon: <Ban className="w-6 h-6 text-blue-600" />,
    title: "Users Must Not",
    items: [
      "Share paid course content",
      "Copy or redistribute materials",
      "Attempt unauthorized platform access",
      "Misuse platform resources",
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    title: "Payments",
    paragraph:
      "All fees displayed on Learn.VellarationTechnologies.com must be paid before accessing paid services. Payments are securely processed through authorized payment gateways.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Intellectual Property",
    items: [
      "Videos",
      "Course materials",
      "Projects",
      "Branding",
      "Designs",
      "Source code examples",
    ],
    footer:
      "All content is the intellectual property of Vellaration Technologies Pvt. Ltd. Unauthorized reproduction or distribution is prohibited.",
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    title: "Certificates",
    items: [
      "Successful completion of the program",
      "Required submissions",
      "Attendance or evaluation requirements",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
           <Navbar></Navbar>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal & Platform Policies
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Terms & Conditions
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              These Terms & Conditions govern your use of{" "}
              <span className="font-semibold text-blue-700">
                Learn.VellarationTechnologies.com
              </span>{" "}
              and all services provided by Vellaration Technologies Pvt. Ltd.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              By accessing or using our platform, you agree to comply with
              these terms and policies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-200 font-medium">
                Explore Programs
              </button>

              <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all px-6 py-3 rounded-xl font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-10">
          <h2 className="text-3xl font-bold mb-5">Introduction</h2>

          <p className="text-gray-600 leading-8">
            These Terms & Conditions apply to all users accessing training,
            internship, mentorship, and educational services offered through
            Learn.VellarationTechnologies.com.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                {section.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-5">
                {section.title}
              </h3>

              {section.paragraph && (
                <p className="text-gray-600 leading-8">
                  {section.paragraph}
                </p>
              )}

              {section.items && (
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.footer && (
                <p className="text-gray-600 leading-8 mt-5">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Placement Assistance */}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>

          <h3 className="text-2xl font-semibold mb-5">
            Placement Assistance
          </h3>

          <div className="space-y-4">
            {[
              "We provide placement assistance and career guidance.",
              "Job placement is not guaranteed.",
              "Selection depends on student performance and recruiter requirements.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suspension */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
              <Ban className="w-6 h-6 text-red-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-5">
              Suspension & Termination
            </h3>

            <div className="space-y-4">
              {[
                "Fraudulent activity",
                "Content misuse",
                "Abusive behavior",
                "Violation of platform terms",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Liability */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-5">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            </div>

            <h3 className="text-2xl font-semibold mb-5">
              Limitation of Liability
            </h3>

            <div className="space-y-4">
              {[
                "Internet or network issues",
                "Third-party service interruptions",
                "User device problems",
                "Career outcomes",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modifications */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-5">
            <RefreshCcw className="w-8 h-8" />

            <h3 className="text-3xl font-bold">Modifications</h3>
          </div>

          <p className="text-blue-100 leading-8">
            We may update these Terms & Conditions at any time without prior
            notice. Continued use of the platform indicates acceptance of
            updated terms and policies.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Website</h4>
              <p className="text-gray-600 break-all">
                Learn.VellarationTechnologies.com
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">
                support@vellarationtechnologies.com
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-600">+91 63068 04362</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-500">
              © 2026 Vellaration Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}