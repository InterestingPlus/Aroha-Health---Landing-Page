import React from "react";

import {
  Calendar,
  Clock,
  Users,
  Activity,
  Video,
  FileText,
} from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const KeyCapabilities = () => {
  const capabilities = [
    {
      icon: <Calendar size={24} />,
      title: "Appointment Calendar View",
      desc: "View daily, weekly, and monthly schedules at a glance with color-coded appointment types.",
    },
    {
      icon: <Users size={24} />,
      title: "Client Scheduling",
      desc: "Allow clients to request appointments based on your real-time availability.",
    },
    {
      icon: <Activity size={24} />,
      title: "Session Tracking",
      desc: "Monitor attendance, cancellations, and no-shows to optimize your practice operations.",
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Session Duration",
      desc: "Customize appointment lengths to fit different types of consultations and therapies.",
    },
    {
      icon: <Video size={24} />,
      title: "Online & In-Person Sessions",
      desc: "Automatically generate telehealth video links or specify physical clinic locations.",
    },
    {
      icon: <FileText size={24} />,
      title: "Session Notes Management",
      desc: "Attach private clinical notes securely to each scheduled appointment.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <Container>
        <SectionHeading
          title="Designed for Healthcare Workflows"
          subtitle="A comprehensive toolkit to handle the complexities of modern clinical scheduling."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-indigo-600 shrink-0">
                {cap.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {cap.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyCapabilities;
