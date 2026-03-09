import React from "react";
import Container from "./Container";

import {
  Users,
  CalendarDays,
  Video,
  ArrowRight,
  PlayCircle,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-32 overflow-hidden bg-slate-50 relative">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-indigo-50/50 blur-3xl rounded-full -z-10 pointer-events-none"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              New Scheduling Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Smart Scheduling for{" "}
              <span className="text-indigo-600">
                Modern Healthcare Practices
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Easily manage appointments, sessions, and client schedules with
              Aroha Health's intelligent, practitioner-first scheduling system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group"
                onClick={() => {
                  window.open("https://care.aroha-health.com", "_blank");
                }}
              >
                Explore Scheduling
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
                onClick={() => {
                  window.open("https://aroha-health.com", "_blank");
                }}
              >
                <PlayCircle size={20} className="text-slate-400" />
                View Demo
              </button>
            </div>
          </div>

          {/* Right side UI Mockup */}
          <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-teal-50 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[500px]">
              {/* Mockup Header */}
              <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-200 text-sm font-medium text-slate-700">
                    <CalendarDays size={16} className="text-indigo-600" />
                    Today
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <ChevronLeft
                      size={20}
                      className="cursor-pointer hover:text-slate-800"
                    />
                    <ChevronRight
                      size={20}
                      className="cursor-pointer hover:text-slate-800"
                    />
                    <span className="font-semibold text-slate-800 ml-2">
                      March 2026
                    </span>
                  </div>
                </div>
                <button
                  className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1"
                  onClick={() => {
                    window.open("https://care.aroha-health.com", "_blank");
                  }}
                >
                  <Plus size={16} /> New Appt
                </button>
              </div>
              {/* Mockup Body */}
              <div className="flex-1 p-6 bg-slate-50 overflow-hidden relative">
                <div className="absolute top-12 left-10 right-10 bottom-0 border-l border-slate-200">
                  {/* Time indicators */}
                  {[9, 10, 11, 12, 1].map((time, i) => (
                    <div
                      key={i}
                      className="absolute w-full border-t border-slate-200/60 flex items-start"
                      style={{ top: `${i * 25}%` }}
                    >
                      <span className="absolute -left-10 -top-5 text-xs text-slate-400 font-medium w-8 text-right">
                        {time} {time < 8 ? "PM" : "AM"}
                      </span>
                    </div>
                  ))}
                  {/* Mock Appointments */}
                  <div className="absolute top-[5%] left-4 right-4 bg-indigo-50 border border-indigo-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-indigo-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-indigo-900 text-sm">
                          Therapy Session - Sarah Jenkins
                        </h4>
                        <p className="text-indigo-600 text-xs mt-0.5">
                          09:15 AM - 10:00 AM • Video Call
                        </p>
                      </div>
                      <Video size={14} className="text-indigo-400" />
                    </div>
                  </div>
                  <div className="absolute top-[40%] left-4 right-4 bg-teal-50 border border-teal-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-teal-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-teal-900 text-sm">
                          Initial Consultation - Mark D.
                        </h4>
                        <p className="text-teal-700 text-xs mt-0.5">
                          10:30 AM - 11:30 AM • In-person
                        </p>
                      </div>
                      <Users size={14} className="text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
