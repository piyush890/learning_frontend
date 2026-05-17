import React from "react";
import {
  ShieldCheck,
  Lock,
  Cookie,
  Database,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const sections = [
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "Information We Collect",
    content: [
      "Full Name",
      "Email Address",
      "Phone Number",
      "Educational Information",
      "Resume or Portfolio Details",
      "Payment Details",
      "Account Credentials",
      "IP Address",
      "Browser Information",
      "Usage Analytics",
      "Cookies & Session Data",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "How We Use Your Information",
    content: [
      "Provide course access and training services",
      "Process enrollments and payments",
      "Send important notifications and updates",
      "Improve our learning platform",
      "Provide placement assistance",
      "Respond to support queries",
      "Share internship and career opportunities",
    ],
  },
  {
    icon: <Lock className="w-6 h-6 text-blue-600" />,
    title: "Payment Security",
    paragraph:
      "Payments on Learn.VellarationTechnologies.com are securely processed through authorized third-party payment gateways. We do not store complete debit or credit card information on our servers.",
  },
  {
    icon: <Cookie className="w-6 h-6 text-blue-600" />,
    title: "Cookies Policy",
    content: [
      "Improve website functionality",
      "Analyze platform performance",
      "Personalize user experience",
      "Maintain login sessions",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Data Protection",
    paragraph:
      "We implement reasonable technical and organizational measures to protect user data against unauthorized access, misuse, or disclosure. However, no internet-based service is completely secure.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* Hero Section */}
      <Navbar></Navbar>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Privacy & Data Protection
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-blue-700">
                Learn.VellarationTechnologies.com
              </span>
              . We value your privacy and are committed to protecting your
              personal information while you use our educational platform and
              services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-200">
                Learn More
              </button>

              <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all px-6 py-3 rounded-xl font-medium">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-10">
          <h2 className="text-3xl font-bold mb-5">Introduction</h2>

          <p className="text-gray-600 leading-8">
            This Privacy Policy explains how Vellaration Technologies Pvt. Ltd.
            collects, uses, stores, and safeguards your information when you
            access our website, enroll in training programs, or use our
            educational services.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            By using Learn.VellarationTechnologies.com, you agree to the
            practices described in this Privacy Policy.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-5">{item.title}</h3>

              {item.paragraph && (
                <p className="text-gray-600 leading-8">{item.paragraph}</p>
              )}

              {item.content && (
                <div className="space-y-4">
                  {item.content.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                      <p className="text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-8 mt-10">
          {/* Sharing Information */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-5">
              Sharing of Information
            </h3>

            <div className="space-y-4">
              {[
                "We do not sell personal information.",
                "Information may be shared with trusted service providers.",
                "Shared for placement assistance purposes.",
                "Shared when legally required.",
                "Used to protect our legal rights.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-5">
              Student Communication
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
              By registering on our platform, you agree to receive:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Course-related notifications",
                "Mentorship updates",
                "Internship information",
                "Placement assistance updates",
                "Promotional communications",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-50 rounded-2xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-5">
              Third-Party Services
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                "Payment Gateways",
                "Hosting Providers",
                "Analytics Tools",
                "Cloud Platforms",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-2xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              Changes to Privacy Policy
            </h3>

            <p className="text-blue-100 leading-8">
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with updated effective dates.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-8">Contact Us</h3>

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
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}