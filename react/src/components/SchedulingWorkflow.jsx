import React from "react";

import {
  Users,
  CalendarDays,
  Activity,
  CheckCircle2,
  Search,
  CalendarPlus,
} from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const SchedulingWorkflow = () => {
  const steps = [
    {
      num: 1,
      icon: <Users size={20} />,
      title: "Add Client",
      desc: "Create and manage client profiles before scheduling sessions.",
      mock: (
        <div className="space-y-2">
          <div className="h-8 bg-slate-100 rounded-md flex items-center px-3 gap-2 text-slate-400 text-sm">
            <Search size={14} /> Find or add client...
          </div>
        </div>
      ),
    },
    {
      num: 2,
      icon: <CalendarPlus size={20} />,
      title: "Schedule Appointment",
      desc: "Quickly create new appointments using an intuitive scheduling modal.",
      mock: (
        <div className="space-y-2 border border-slate-100 rounded-md p-2 bg-white shadow-sm">
          <div className="h-4 w-2/3 bg-indigo-100 rounded"></div>
          <div className="h-3 w-1/2 bg-slate-100 rounded mt-2"></div>
          <div className="h-6 w-full bg-indigo-600/10 rounded mt-3"></div>
        </div>
      ),
    },
    {
      num: 3,
      icon: <CalendarDays size={20} />,
      title: "Manage Calendar",
      desc: "View all upcoming appointments in a clear calendar interface.",
      mock: (
        <div className="grid grid-cols-3 gap-1 h-16">
          <div className="bg-slate-50 rounded flex flex-col justify-end p-1">
            <div className="h-2 w-full bg-indigo-200 rounded"></div>
          </div>
          <div className="bg-slate-50 rounded flex flex-col justify-center p-1">
            <div className="h-4 w-full bg-teal-200 rounded"></div>
          </div>
          <div className="bg-slate-50 rounded flex flex-col justify-start p-1">
            <div className="h-3 w-full bg-sky-200 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      num: 4,
      icon: <Activity size={20} />,
      title: "Track Sessions",
      desc: "Manage session history, comprehensive notes, and therapy progress.",
      mock: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-teal-500" />
            <div className="h-2 w-full bg-slate-100 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-teal-500" />
            <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[14px] h-[14px] rounded-full border border-slate-300"></div>
            <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          title="How Scheduling Works"
          subtitle="A seamless workflow designed to save you time and keep your practice organized."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden xl:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-slate-200 z-0"></div>
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative z-10 h-full flex flex-col hover:border-indigo-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <div className="p-2 bg-slate-50 text-slate-500 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 mb-6 flex-1">
                  {step.desc}
                </p>

                {/* Mini UI Preview Placeholder */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mt-auto">
                  {step.mock}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SchedulingWorkflow;
