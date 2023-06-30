"use client"

import { useEffect, useState } from "react";

export default function Scroll() {
  let [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Your website content goes here */}

      <button
        className={`scrollButton ${showScrollButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        &#9650;
      </button>

      <style jsx>{`
        .scrollButton {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          font-size: 24px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
          transition: opacity 0.3s ease-in-out;
          opacity: 0;
        }
        .scrollButton.hover {
          color: white;
        }

        .scrollButton.show {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
