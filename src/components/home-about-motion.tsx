"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeAboutMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".home-about");
    if (
      !section ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(
        ".home-about__header > *",
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".home-about__visual",
        { autoAlpha: 0, x: -26 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".home-about__copy > *",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return null;
}
