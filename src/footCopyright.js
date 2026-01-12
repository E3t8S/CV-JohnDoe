import { useEffect, useState } from "react";

export default function Copyright() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);


    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Remonter en haut de la page"
      className={`back-to-top ${isVisible ? "visible" : ""}`}
    >
      
      <p>&copy; Designed by John Doe</p>
    </button>
  );
}