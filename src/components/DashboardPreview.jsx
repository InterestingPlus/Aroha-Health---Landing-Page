import React from "react";

import { Users, CalendarDays, Activity, FileText, Search } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          title="Everything in One Clear Dashboard"
          subtitle="Stay on top of appointments, sessions, and client activity from a single intuitive dashboard designed for healthcare professionals."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Main Dashboard Mockup Container */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex aspect-[4/3] md:aspect-[16/9]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 bg-slate-50 border-r border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-8 px-2">
                {/* <div className="bg-indigo-600 text-white p-2 rounded-lg"> */}
                <div className="bg-white text-white rounded-lg">
                  {/* <Activity size={24} /> */}
                  <img
                    src={"https://aroha-health.com/assets/logo.png"}
                    alt="Aroha Health Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="font-bold text-slate-800">Aroha Health</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium relative group">
                  <CalendarDays size={18} />
                  <span>Calendar</span>
                  {/* Highlight Marker */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap hidden group-hover:block z-20">
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-600 transform rotate-45"></div>
                    Calendar View
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium relative group cursor-pointer transition-colors">
                  <Users size={18} />
                  <span>Clients</span>
                  {/* Highlight Marker */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap hidden group-hover:block z-20">
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-teal-600 transform rotate-45"></div>
                    Client List
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium relative group cursor-pointer transition-colors">
                  <FileText size={18} />
                  <span>Sessions & Notes</span>
                  {/* Highlight Marker */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-sky-600 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap hidden group-hover:block z-20">
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-sky-600 transform rotate-45"></div>
                    Sessions
                  </div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div className="flex-1 flex flex-col bg-white relative">
              {/* Header */}
              <div className="h-16 border-b border-slate-100 flex justify-between items-center px-6">
                <h3 className="font-semibold text-lg text-slate-800">
                  Weekly Schedule
                </h3>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <Search size={16} className="text-slate-500" />
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium relative group">
                    + Create
                    {/* Highlight Marker */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap hidden group-hover:block z-20">
                      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 transform rotate-45"></div>
                      New Appointments
                    </div>
                  </button>
                </div>
              </div>

              {/* Calendar Grid (Simplified) */}
              <div className="flex-1 p-6 bg-slate-50/50">
                <div className="bg-white border border-slate-200 rounded-xl h-full shadow-sm flex flex-col">
                  {/* Days Header */}
                  <div className="grid grid-cols-5 border-b border-slate-200">
                    {["Mon 12", "Tue 13", "Wed 14", "Thu 15", "Fri 16"].map(
                      (day, i) => (
                        <div
                          key={day}
                          className={`p-3 text-center text-sm font-medium ${i === 1 ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500"} border-r border-slate-100 last:border-0`}
                        >
                          {day}
                        </div>
                      ),
                    )}
                  </div>
                  {/* Calendar Body */}
                  <div className="flex-1 grid grid-cols-5 relative">
                    {/* Horizontal grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                      {[1, 2, 3, 4].map((l) => (
                        <div
                          key={l}
                          className="w-full border-t border-slate-300 flex-1"
                        ></div>
                      ))}
                    </div>
                    {/* Day columns */}
                    {[0, 1, 2, 3, 4].map((col) => (
                      <div
                        key={col}
                        className="border-r border-slate-100 last:border-0 relative p-2"
                      >
                        {col === 1 && (
                          <div className="absolute top-10 left-2 right-2 bg-indigo-100 border border-indigo-200 rounded-md p-2 shadow-sm">
                            <p className="text-xs font-semibold text-indigo-900">
                              Dr. Smith Consult
                            </p>
                            <p className="text-[10px] text-indigo-700 mt-1">
                              10:00 - 11:00 AM
                            </p>
                          </div>
                        )}
                        {col === 3 && (
                          <div className="absolute top-32 left-2 right-2 bg-teal-100 border border-teal-200 rounded-md p-2 shadow-sm">
                            <p className="text-xs font-semibold text-teal-900">
                              Therapy: Client A
                            </p>
                            <p className="text-[10px] text-teal-700 mt-1">
                              01:00 - 02:00 PM
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind dashboard */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPreview;
