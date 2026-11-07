import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";

const tabs = [
  { id: "experience", label: "Professional Experience" },
  { id: "education", label: "Education" },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Journey</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Career timeline</h2>
        </div>

        <div role="tablist" className="tabs tabs-boxed justify-center rounded-full bg-slate-900/70 p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "tab-active bg-cyan-400 text-slate-950"
                  : "text-slate-200 hover:text-cyan-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {activeTab === "experience" ? <Experience /> : <Education />}
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
