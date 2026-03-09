import React from "react";

import {
  Calendar,
  Clock,
  Users,
  CalendarCheck,
  CalendarDays,
  Activity,
  Video,
  FileText,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  CalendarPlus,
} from "lucide-react";
import Container from "./Container";

const FeatureOverview = () => {
  const features = [
    {
      icon: <CalendarCheck size={28} />,
      title: "Centralized Appointment Management",
      description:
        "Schedule, edit, and manage all client appointments from one unified, lightning-fast dashboard.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <Clock size={28} />,
      title: "Flexible Time Scheduling",
      description:
        "Set session durations, manage practitioner availability, and organize complex schedules effortlessly.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: <Users size={28} />,
      title: "Integrated Client Records",
      description:
        "Link appointments directly with secure client profiles, intake forms, and session notes.",
      color: "text-sky-600",
      bgColor: "bg-sky-50",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bgColor} ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeatureOverview;
