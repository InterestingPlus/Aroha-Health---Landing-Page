import React from "react";

import { CheckCircle2 } from "lucide-react";
import Container from "./Container";

const Benefits = () => {
  const benefits = [
    {
      title: "Save Time",
      desc: "Automate scheduling workflows, reduce manual data entry, and minimize the administrative burden on your staff.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Stay Organized",
      desc: "Track every session, upcoming appointment, and client communication in one centralized, secure location.",
      color: "from-teal-400 to-teal-500",
    },
    {
      title: "Improve Client Experience",
      desc: "Deliver a smooth, professional, and reliable scheduling experience that builds trust with every client interaction.",
      color: "from-sky-400 to-sky-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group overflow-hidden"
            >
              {/* Decorative top gradient border */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color}`}
              ></div>

              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} className="text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
