import React from "react";
import {
  RefreshCcw,
  ShieldCheck,
  Clock3,
  CreditCard,
  AlertTriangle,
  Truck,
  Download,
  MonitorPlay,
  FileCheck,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/NavBar";

const refundSections = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Refund Eligibility",
    items: [
      "Requested within 3 days of purchase",
      "Course content has not been substantially accessed",
    ],
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    title: "Non-Refundable Cases",
    items: [
      "Downloaded materials",
      "Completed sessions",
      "Certificates already issued",
      "Internship completion programs",
      "Placement-related services already utilized",
    ],
  },
  {
    icon: <RefreshCcw className="w-6 h-6 text-blue-600" />,
    title: "Cancellation Policy",
    paragraph:
      "Students may request cancellation before the official batch commencement. After the batch starts, partial or full refunds may not be applicable.",
  },
  {
    icon: <Clock3 className="w-6 h-6 text-blue-600" />,
    title: "Processing Time",
    items: [
      "Approved refunds are processed within 7–10 business days",
      "Refunds are credited to the original payment method",
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    title: "Duplicate Transactions",
    paragraph:
      "Duplicate payments made accidentally will be refunded after verification.",
  },
];


export default function RefundShippingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
            <Navbar></Navbar>
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <RefreshCcw className="w-4 h-4" />
              Refunds, Cancellations & Delivery
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Refunds & Shipping Policy
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              This policy explains refund eligibility, cancellation terms,
              and service-related guidelines for
              Learn.VellarationTechnologies.com.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-200 font-medium">
                Contact Support
              </button>

              <button className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all px-6 py-3 rounded-xl font-medium">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <RefreshCcw className="w-7 h-7 text-blue-600" />
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Refunds & Cancellations Policy
              </h2>

              <p className="text-gray-600 mt-2">
                Review refund eligibility and cancellation conditions before
                enrolling in any course or training program.
              </p>
            </div>
          </div>

          {/* Enrollment */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Course Enrollment
            </h3>

            <p className="text-gray-600 leading-8">
              Students are advised to review all program details carefully
              before purchasing any course, internship, or training program.
            </p>
          </div>

          {/* Refund Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {refundSections.map((section, index) => (
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
              </div>
            ))}
          </div>

          {/* Gateway Issues */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-5">
              Payment Gateway Issues
            </h3>

            <div className="space-y-4">
              {[
                "Bank delays",
                "Gateway downtime",
                "Third-party transaction failures",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white mt-1" />
                  <p className="text-blue-100">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-blue-100 mt-6 leading-8">
              However, our support team will assist users in resolving payment
              related issues whenever possible.
            </p>
          </div>
        </div>

   

        {/* Contact */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
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