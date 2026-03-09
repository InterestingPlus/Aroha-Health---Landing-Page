import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import Benefits from "./components/Benefits";
import KeyCapabilities from "./components/KeyCapabilities";
import DashboardPreview from "./components/DashboardPreview";
import SchedulingWorkflow from "./components/SchedulingWorkflow";
import FeatureOverview from "./components/FeatureOverview";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureOverview />
        <SchedulingWorkflow />
        <DashboardPreview />
        <KeyCapabilities />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
