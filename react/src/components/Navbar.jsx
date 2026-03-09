import React from "react";
import Container from "./Container";

import { Activity } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
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
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Aroha Health
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Solutions
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Resources
            </NavLink>
          </div>
          <div className="flex gap-4">
            <button
              className="hidden md:block text-slate-600 font-medium hover:text-slate-900 transition-colors px-4 py-2"
              onClick={() => {
                window.open("https://care.aroha-health.com", "_blank");
              }}
            >
              Log in
            </button>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm shadow-indigo-200"
              onClick={() => {
                window.open("https://aroha-health.com", "_blank");
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
