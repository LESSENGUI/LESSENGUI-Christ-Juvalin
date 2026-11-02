"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollTimelineProps = {
  variant: "education" | "training";
  label: string;
  children: React.ReactNode;
};

function createCurve(points: Array<{ x: number; y: number }>, width: number) {
  if (!points.length) {
    return "";
  }

  return points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = points[index - 1];
    const distance = point.y - previous.y;
    const sway = Math.min(width * 0.18, Math.abs(point.x - previous.x) * 0.8 + width * 0.035);
    const direction = index % 2 === 0 ? -1 : 1;
    const firstControlX = Math.max(12, Math.min(width - 12, previous.x + sway * direction));
    const secondControlX = Math.max(12, Math.min(width - 12, point.x + sway * direction));

    return `${path} C ${firstControlX} ${previous.y + distance * 0.38}, ${secondControlX} ${point.y - distance * 0.38}, ${point.x} ${point.y}`;
  }, "");
}

export function ScrollTimeline({ variant, label, children }: ScrollTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const curveRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const svg = svgRef.current;
    const curve = curveRef.current;
    const glow = glowRef.current;

    if (!timeline || !svg || !curve || !glow) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const entries = Array.from(timeline.querySelectorAll<HTMLElement>("[data-timeline-item]"));
    let activeEntry: HTMLElement | null = null;
    const resizeObserver = new ResizeObserver(() => {
      const bounds = timeline.getBoundingClientRect();
      const width = timeline.clientWidth;
      const height = timeline.scrollHeight;
      const points = entries.map((entry) => {
        const node = entry.querySelector<HTMLElement>(".scroll-timeline-node");
        const nodeBounds = node?.getBoundingClientRect();

        return {
          x: nodeBounds ? nodeBounds.left + nodeBounds.width / 2 - bounds.left : width / 2,
          y: nodeBounds ? nodeBounds.top + nodeBounds.height / 2 - bounds.top : 0,
        };
      });

      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      const path = createCurve(points, width);
      curve.setAttribute("d", path);
      glow.setAttribute("d", path);
      ScrollTrigger.refresh();
    });

    resizeObserver.observe(timeline);
    entries.forEach((entry) => resizeObserver.observe(entry));
    timeline.classList.add("is-enhanced");

    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        curve.setAttribute("stroke-dasharray", "1");
        glow.setAttribute("stroke-dasharray", "1");
        curve.setAttribute("stroke-dashoffset", "0");
        glow.setAttribute("stroke-dashoffset", "0");
        return;
      }

      curve.setAttribute("stroke-dasharray", "1");
      glow.setAttribute("stroke-dasharray", "1");
      curve.setAttribute("stroke-dashoffset", "1");
      glow.setAttribute("stroke-dashoffset", "1");
      const drawing = { progress: 0 };

      gsap.to(drawing, {
        progress: 1,
        ease: "none",
        onUpdate: () => {
          const offset = String(1 - drawing.progress);
          curve.setAttribute("stroke-dashoffset", offset);
          glow.setAttribute("stroke-dashoffset", offset);
        },
        scrollTrigger: {
          trigger: timeline,
          start: "top 78%",
          end: "bottom 72%",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      entries.forEach((entry) => {
        const card = entry.querySelector<HTMLElement>(".scroll-timeline-card");
        const node = entry.querySelector<HTMLElement>(".scroll-timeline-node");

        if (!card || !node) {
          return;
        }

        const activateEntry = () => {
          activeEntry?.classList.remove("is-current");
          entry.classList.add("is-current");
          activeEntry = entry;
        };
        const deactivateEntry = () => {
          entry.classList.remove("is-current");
          if (activeEntry === entry) {
            activeEntry = null;
          }
        };

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 30, rotateX: 2 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 82%",
              once: true,
              onEnter: () => {
                entry.classList.add("is-visible");
                activateEntry();
              },
            },
          },
        );

        gsap.fromTo(
          node,
          { scale: 0.72, opacity: 0.68, boxShadow: "0 0 0 rgba(255,255,255,0)" },
          {
            scale: 1,
            opacity: 1,
            boxShadow: "0 0 24px rgba(255,255,255,0.75), 0 0 46px rgba(136,228,168,0.48)",
            duration: 0.6,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: entry,
              start: "top 82%",
              toggleActions: "play reverse play reverse",
              onEnter: activateEntry,
              onEnterBack: activateEntry,
              onLeave: deactivateEntry,
              onLeaveBack: deactivateEntry,
            },
          },
        );
      });
    }, timeline);

    return () => {
      resizeObserver.disconnect();
      context.revert();
      timeline.classList.remove("is-enhanced");
    };
  }, []);

  return (
    <div
      className={`scroll-timeline ${variant}-timeline`}
      aria-label={label}
      role="list"
      ref={timelineRef}
    >
      <svg
        className="scroll-timeline-svg"
        ref={svgRef}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="scroll-timeline-glow" ref={glowRef} pathLength={1} />
        <path className="scroll-timeline-curve" ref={curveRef} pathLength={1} />
      </svg>
      {children}
    </div>
  );
}
