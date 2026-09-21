import { useState, useRef, useCallback, useEffect } from "react";
import { SLIDES } from "../mapings";

const MIX_MS = 700; // how long the mix transition plays

export default function GlitchCarousel() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  // "idle"     -> no transition running
  // "entering" -> new image just mounted at opacity 0 / blended, about to animate in
  // "settling" -> new image animating to opacity 1 / normal blend
  const [phase, setPhase] = useState("idle");
  const timeoutRef = useRef(null);
  const rafRef = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (phase !== "idle") return; // ignore input mid-transition
      const clamped = (next + SLIDES.length) % SLIDES.length;
      if (clamped === index) return;

      setPrevIndex(index);
      setIndex(clamped);
      setPhase("entering");

      // flip to "settling" on the next frame so the browser registers the
      // starting (opacity 0) style before we transition to the end style —
      // otherwise the transition has nothing to animate from.
      rafRef.current = requestAnimationFrame(() => {
        setPhase("settling");
      });

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPhase("idle");
        setPrevIndex(null);
      }, MIX_MS);
    },
    [phase, index]
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

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const slide = SLIDES[index];
  const isMixing = phase !== "idle";
  const settled = phase === "settling";

  return (
    <div className="min-h-full w-full flex items-center justify-center p-6 relative">
      <div className="w-full min-w-xl">
        <div className="flex items-baseline justify-between mb-3 font-mono text-[11px] tracking-wide text-neutral-500"></div>

        <div className="relative aspect-[4/4] w-full overflow-hidden rounded-md">
          {/* outgoing image: fades out and its blend mode returns to normal
              at the same rate the incoming image blends over it */}
          {prevIndex !== null && (
            <img
              src={SLIDES[prevIndex].src}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-contain select-none transition-opacity ease-in-out"
              style={{
                transitionDuration: `${MIX_MS}ms`,
                opacity: settled ? 0 : 1,
              }}
              draggable={false}
            />
          )}

          {/* incoming image: starts transparent and colour-mixed with
              whatever is behind it, then settles to a plain, fully opaque
              image once the transition completes */}
          <img
            key={index}
            src={slide.src}
            alt={slide.caption}
            className="absolute inset-0 h-full w-full object-contain select-none transition-opacity ease-in-out"
            style={{
              transitionDuration: `${MIX_MS}ms`,
              opacity: !isMixing || settled ? 1 : 0,
              mixBlendMode: isMixing && !settled ? "difference" : "normal",
            }}
            draggable={false}
          />

          {/* bottom fade: blends the image edge into the page background.
              Uses an inline gradient (not a Tailwind color class) so it
              renders regardless of your Tailwind config/version.
              Change the rgb(10,10,13) below to your page's actual
              background color. */}
          <div
            className="pointer-events-none absolute  inset-x-0 bottom-0 h-1/2 z-7"
            style={{
              background:
                "linear-gradient(to top, rgba(11, 14, 19, 1) 0%, rgba(11,14,19,0) 100%)",
            }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* <button
            onClick={prev}
            className="font-mono text-xs text-neutral-400 hover:text-neutral-100 transition-colors px-2 py-1"
            aria-label="Previous slide"
          >
            ← prev
          </button> */}

          <div className="flex gap-2 absolute left-1/2 transform -translate-x-1/2 bottom-15 z-8">
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
