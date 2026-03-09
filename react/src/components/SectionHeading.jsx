import React from "react";

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
