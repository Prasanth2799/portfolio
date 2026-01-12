import { useState } from "react"
import Experience from "./Experience"
import Education from "./Education"

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div>
      <div role="tablist" className="tabs tabs-border justify-center">
        <a
          role="tab"
          className={`tab ${activeTab === "experience" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Professional Experience
        </a>

        <a
          role="tab"
          className={`tab ${activeTab === "education" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </a>
      </div>
      {activeTab === "experience" && <Experience />}
      {activeTab === "education" && <Education />}
    </div>
  )
}

export default ProfileTabs
