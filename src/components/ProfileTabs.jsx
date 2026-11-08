import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";
import SectionHeader from "./ui/SectionHeader";

const tabs = [
  { id: "experience", label: "Work Experience", icon: FaBriefcase },
  { id: "education", label: "Education & Foundation", icon: FaGraduationCap },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="journey" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Career Timeline"
          title="Built through real-world"
          highlight="engineering."
          description="A track record spanning enterprise BFSI clients, high-velocity frontend architecture, and continuous learning."
        />

        {/* Tab Switcher */}
        <div className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Experience and education switcher"
            className="inline-flex rounded-full border border-white/[0.08] bg-zinc-900/70 p-1.5 backdrop-blur-xl"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] transition duration-200 ${
                    isSelected
                      ? "bg-white text-zinc-950 font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon size={13} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content */}
        <div>{activeTab === "experience" ? <Experience /> : <Education />}</div>
      </div>
    </section>
  );
};

export default ProfileTabs;
