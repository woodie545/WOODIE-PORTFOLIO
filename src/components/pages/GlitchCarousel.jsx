import { useState, useEffect, useRef, useCallback } from "react";
import { SLIDES } from "../mapings";



const GLITCH_MS = 480; // how long the glitch transition plays

export default function GlitchCarousel() {
  const [index, setIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const timeoutRef = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (glitching) return; // ignore input mid-transition
      const clamped = (next + SLIDES.length) % SLIDES.length;
      setGlitching(true);
      // swap the underlying image roughly a third of the way into the
      // glitch, so the distortion hides the cut instead of a plain fade
      timeoutRef.current = setTimeout(() => {
        setIndex(clamped);
      }, GLITCH_MS * 0.35);
      timeoutRef.current = setTimeout(() => setGlitching(false), GLITCH_MS);
    },
    [glitching]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 4200);
    return () => clearInterval(id);
  }, [next]);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const slide = SLIDES[index];

  return (
    <div className="min-h-full w-full flex items-center justify-center  p-6 ">
      <style>{`
       
      `}</style>

      <div className="w-full min-w-xl ">
        <div className="flex items-baseline justify-between mb-3 font-mono text-[11px] tracking-wide text-neutral-500">
         
        </div>

        <div
          className={`relative aspect-[4/4] w-full overflow-hidden rounded-md  ${
            glitching ? "glitch-flicker" : ""
          }`}
        >
          {/* base image */}
          <img
            src={slide.src}
            alt={slide.caption}
            className="absolute inset-0 h-full w-full object-contain select-none"
            draggable={false}
          />

          {glitching && (
            <>
              {/* cyan channel ghost, offset */}
              <img
                src={slide.src}
                alt=""
                aria-hidden
                className="glitch-cyan pointer-events-none absolute inset-0 h-full w-full object-contain mix-blend-screen"
                style={{ filter: "brightness(1.2) saturate(2) hue-rotate(160deg)" }}
                draggable={false}
              />
              {/* magenta channel ghost, offset the other way */}
              <img
                src={slide.src}
                alt=""
                aria-hidden
                className="glitch-magenta pointer-events-none absolute inset-0 h-full w-full object-contain mix-blend-screen"
                style={{ filter: "brightness(1.2) saturate(2) hue-rotate(-30deg)" }}
                draggable={false}
              />
              {/* two sliced bands that jump around, selling the "torn signal" look */}
              <div
                className="glitch-slice-a pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
              <div
                className="glitch-slice-b pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
              {/* scanlines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,.06) 0px, rgba(255,255,255,.06) 1px, transparent 1px, transparent 3px)",
                }}
              />
            </>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* <button
            onClick={prev}
            className="font-mono text-xs text-neutral-400 hover:text-neutral-100 transition-colors px-2 py-1"
            aria-label="Previous slide"
          >
            ← prev
          </button> */}

          <div className="flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 w-5 rounded-full transition-colors ${
                  i === index ? "bg-blue-600" : "bg-neutral-700 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>

          {/* <button
            onClick={next}
            className="font-mono text-xs text-neutral-400 hover:text-neutral-100 transition-colors px-2 py-1"
            aria-label="Next slide"
          >
            next →
          </button> */}
        </div>
      </div>
    </div>
  );
}
