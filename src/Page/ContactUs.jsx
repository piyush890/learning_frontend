import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  Globe,
  MessageSquare,
} from "lucide-react";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              We’d Love to Hear From You
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Contact Us
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions about courses, internships, payments, or
              placements? Our team is here to help you anytime.
            </p>

          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to
              you shortly.
            </p>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 transition-all rounded-2xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Website */}
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Website
                    </h3>

                    <p className="text-gray-600 break-all">
                      Learn.VellarationTechnologies.com
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Email Address
                    </h3>

                    <p className="text-gray-600">
                      support@vellarationtechnologies.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
               

               
              </div>
            </div>

        
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}