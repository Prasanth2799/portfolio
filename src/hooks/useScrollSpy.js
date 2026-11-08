import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds = [], offset = 140) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition > 400);

      const pageBottom = window.innerHeight + scrollPosition >= document.body.offsetHeight - 60;
      if (pageBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - offset;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return { activeSection, showBackToTop };
};
