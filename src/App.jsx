import { MdKeyboardArrowUp } from "react-icons/md";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProfileTabs from "./components/ProfileTabs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useScrollSpy } from "./hooks/useScrollSpy";

const sectionIds = ["home", "about", "skills", "projects", "journey", "contact"];

function App() {
  const { activeSection, showBackToTop } = useScrollSpy(sectionIds, 150);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-zinc-950">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-20 rounded-xl bg-white px-4 py-2 font-mono text-xs font-bold text-zinc-950 transition duration-200 focus:translate-y-0"
      >
        Skip to main content
      </a>

      {/* Modular Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Feature Sections */}
      <main id="main-content">
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <ProfileTabs />
        <Contact />
      </main>

      {/* Modular Minimalist Footer */}
      <Footer />

      {/* Floating Back to Top Pill */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 text-white shadow-2xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-white/40 hover:bg-white hover:text-zinc-950"
          aria-label="Back to top"
          title="Back to top"
        >
          <MdKeyboardArrowUp size={22} />
        </button>
      )}
    </div>
  );
}

export default App;
