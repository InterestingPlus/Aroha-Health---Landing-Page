import React from "react";

import Container from "./Container";

const Cta = () => {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-teal-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Simplify Your Scheduling Workflow Today
            </h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-10 leading-relaxed">
              Discover how Aroha Health helps modern healthcare professionals
              manage appointments effortlessly and focus more on client care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="bg-white text-indigo-900 hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
                onClick={() => {
                  window.open("https://aroha-health.com", "_blank");
                }}
              >
                Get Started for Free
              </button>
              <button
                className="bg-indigo-800/50 hover:bg-indigo-800 text-white border border-indigo-500/30 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
                onClick={() => {
                  window.open("https://care.aroha-health.com", "_blank");
                }}
              >
                Talk to Sales
              </button>
            </div>
            <p className="text-indigo-200/80 text-sm mt-6">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
