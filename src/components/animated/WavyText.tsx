import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

interface WavyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  x?: number[];
  y?: number[];
  staggerDelay?: number;
}

export default function WavyText({ text, x, y, ...props }: WavyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      const { chars } = splitText(containerRef.current.querySelector(".wavy")!);
      containerRef.current.style.visibility = "visible";

      const staggerDelay = props.staggerDelay ?? 0.15;

      animate(
        chars,
        { y: y ?? [-20, 20], x },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(staggerDelay, { startDelay: -staggerDelay * chars.length }),
        }
      );
    });
  }, []);

  return (
    <div className="container" ref={containerRef} {...props}>
      <span className="wavy">{text}</span>.
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                visibility: hidden;
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
