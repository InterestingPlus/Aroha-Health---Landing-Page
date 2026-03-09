import React from "react";

import { Activity } from "lucide-react";
import Container from "./Container";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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
            <span className="font-bold text-lg text-slate-900">
              Aroha Health
            </span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <NavLink
              to="/privacy-policy"
              className={({ isActive }) =>
                `transition-colors hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms-of-service"
              className={({ isActive }) =>
                `transition-colors hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Terms of Service
            </NavLink>

            <NavLink
              to="/contact-support"
              className={({ isActive }) =>
                `transition-colors hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Contact Support
            </NavLink>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 Aroha Health. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
