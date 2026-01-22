"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SEGMENTS = 5;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[70vh] w-6 z-50 hidden lg:flex justify-center">
      <div className="relative w-[2px] h-full flex flex-col justify-between">
        {Array.from({ length: SEGMENTS }).map((_, i) => {
          const segmentStart = i / SEGMENTS;
          const segmentEnd = (i + 1) / SEGMENTS;

          const filled =
            scrollProgress >= segmentEnd
              ? 1
              : scrollProgress <= segmentStart
              ? 0
              : (scrollProgress - segmentStart) /
                (segmentEnd - segmentStart);

          return (
            <div key={i} className="relative flex-1 flex items-center">
              {/* segment background */}
              <div className="absolute inset-0 bg-emerald-500/25 rounded-full" />

              {/* segment fill */}
              <div
                className="absolute bottom-0 left-0 w-full bg-emerald-600 rounded-full transition-all duration-200"
                style={{ height: `${filled * 100}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
